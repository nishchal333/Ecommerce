/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const getTokenExpiry = (token) => {
  try {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(
      window.atob(payload.replace(/-/g, '+').replace(/_/g, '/')),
    );
    return typeof decodedPayload.exp === 'number' ? decodedPayload.exp * 1000 : null;
  } catch {
    return null;
  }
};

const isTokenValid = (token) => {
  const expiresAt = getTokenExpiry(token);
  return Boolean(token && expiresAt && expiresAt > Date.now());
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return isTokenValid(storedToken) ? storedToken : null;
  });

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('auth:logout'));
    setToken(null);
    navigate('/Login');
  }, [navigate]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !isTokenValid(storedToken)) {
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('auth:logout'));
    }

    const requestInterceptor = axios.interceptors.request.use((config) => {
      const currentToken = localStorage.getItem('token');
      if (currentToken && isTokenValid(currentToken)) {
        config.headers = config.headers || {};
        config.headers['x-auth-token'] = currentToken;
      }
      return config;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 && localStorage.getItem('token')) {
          logout();
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [logout]);

  useEffect(() => {
    if (!token) {
      return undefined;
    }

    const expiresAt = getTokenExpiry(token);
    if (!expiresAt) {
      logout();
      return undefined;
    }

    const timeout = window.setTimeout(logout, Math.max(0, expiresAt - Date.now()));
    return () => window.clearTimeout(timeout);
  }, [logout, token]);

  const login = useCallback((newToken) => {
    if (!isTokenValid(newToken)) {
      throw new Error('Received an invalid or expired authentication token.');
    }
    localStorage.setItem('token', newToken);
    setToken(newToken);
  }, []);

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [login, logout, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};

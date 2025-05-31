// src/context/UserContext.js

// import React, { createContext, useReducer, useContext, useEffect } from 'react';
// import axios from 'axios';
// import userReducer from '../Reducer/userReducer';

// const UserContext = createContext();

// const initialState = {
//   user: null,
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (token) {
//           const response = await axios.get('/api/users', {
//             headers: {
//               'x-auth-token': token,
//             },
//           });
//           dispatch({ type: 'SET_USER', payload: response.data });
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   return useContext(UserContext);
// };

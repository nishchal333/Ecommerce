import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Nav from './Nav';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MainHeader>
      <div className="header-container">
        <div className="logo-container">
          <NavLink to="/" className="logo-wrapper">
            <img className="logo" src='logo.png' alt="electromart" />
            <div className="logo-text">
              {/* <h1>ElectroMart</h1> */}
              <p>Your Electronics Destination</p>
            </div>
          </NavLink>
        </div>

        <div className="nav-container">
          <Nav />
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Nav />
      </div>
    </MainHeader>
  );
}

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-container {
    .logo-wrapper {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }

      .logo {
        height: 4rem;
        width: auto;
        margin-right: 1rem;
      }

      .logo-text {
        h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        p {
          font-size: 0.9rem;
          color: #718096;
          margin: 0;
          font-weight: 500;
        }
      }
    }
  }

  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #2d3748;
    cursor: pointer;
  }

  .mobile-menu {
    display: none;
    background: white;
    padding: 1rem;
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.active {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .mobile-menu-button {
      display: block;
    }

    .header-container {
      height: 5rem;
    }

    .logo-container {
      .logo-wrapper {
        .logo {
          height: 3rem;
        }

        .logo-text {
          h1 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .header-container {
      padding: 0 1rem;
    }

    .logo-container {
      .logo-wrapper {
        .logo-text {
          display: none;
        }
      }
    }
  }
`;

export default Header;
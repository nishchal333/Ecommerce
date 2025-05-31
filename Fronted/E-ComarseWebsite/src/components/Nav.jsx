import React ,{useState} from 'react'
import styled from 'styled-components'
import { NavLink,useNavigate  } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { SlMenu } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { useCartContext } from '../Context/cart_context';
import Modal from '../components/Users/Modal';
import Login from './Users/Login';
import SignupPage from './Users/SignupPage';
function Nav() {
  const [menuIcon, setMenuIcon] =useState();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const {total_item }= useCartContext();
// show page
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem('token');
    // Redirect to home page
    navigate('/');
  };
  const handleProductClick = () => {
    if (!token) {
      // If user is not logged in, navigate to login page
      navigate('/Login');
    } else {
      // Close menu and navigate to product page
      setMenuIcon(false);
      navigate('/ProducrCard');
    }
  };

  const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 3rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
 
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }
.span{
  font-size: 2.2rem;
  cursor: pointer;
}
  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -7%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
      
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
       width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
      .span{
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;
return(
 <Nav>
<div className={menuIcon ? "navbar active" : "navbar"}>
  <ul className='navbar-lists'>
    <li>
      <NavLink className="navbar-link" to="/"
      onClick={()=>setMenuIcon(false)}>Home</NavLink>
    </li>
    <li>
      <NavLink className="navbar-link" to="/about"
      onClick={()=>setMenuIcon(false)}>about</NavLink>
    </li>
    <li>
      <NavLink className="navbar-link" to="/contact"
      onClick={()=>setMenuIcon(false)}>Contact</NavLink>
    </li>
    <li>
    <span className="navbar-link span" onClick={handleProductClick}>Product</span>

          </li>
          {!token ? (
            <>
              <li>
                <NavLink className="navbar-link user-login" to="/" onClick={() => setShowSignupModal(true)}>Signup</NavLink>
              </li>
              <li>
                <NavLink className="navbar-link user-login btn" to="/" onClick={() => setShowLoginModal(true)}>Login</NavLink>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="navbar-link user-logout">Logout</button>
            </li>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
            <TiShoppingCart className='cart-trolley' />
            <span className='cart-total--item'>{total_item}</span>
            </NavLink>
          </li>

  </ul>
{/* for navbar responsive  */}
<div className='mobile-navbar-btn '>
<SlMenu name='menu-outline' className='mobile-nav-icon'
onClick={()=>setMenuIcon(true)}/>
<IoCloseSharp  name='close-outline' className='mobile-nav-icon close-outline'
onClick={()=>setMenuIcon(false)}/>

</div>
</div>
<Modal show={showLoginModal ? true : undefined} handleClose={() => setShowLoginModal(false)}>
<Login/>
      </Modal>
      <Modal show={showSignupModal ? true : undefined} handleClose={() => setShowSignupModal(false)}>
      <SignupPage  />
      </Modal>

</Nav>

)
};

export default Nav;

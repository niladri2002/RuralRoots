import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

import axios from "axios";

const Nav = ({ onLogout }) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const Nav = styled.nav`
  .dropdown {
    position: absolute;
    top: 100%; /* Place the dropdown below the user icon */
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .dropdown-item {
    text-decoration: none;
    color: #333;
    padding: 5px 0;
    display: block; /* Display items as block-level elements */
  }
  
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
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
        top: -20%;
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



  const handleLogout = () => {
    const token = localStorage.getItem('token');
    
    const logout = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/sccount/logout',
        {
          headers: {
            Authorization: `Token ${token}`
          }
        });
  
    } catch (error) {
        console.error('Error:', error);
      }
    }

    onLogout();
  };


  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
          
          <li>
            <div
              className="user-icon"
              onClick={() => setUserDropdown(!userDropdown)}
            >
              <FiUser className="user-icon" />
              {userDropdown && (
                <div className="dropdown">
                  <NavLink
                    to="/login"
                    className="dropdown-item"
                    onClick={() => setMenuIcon(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="dropdown-item"
                    onClick={() => setMenuIcon(false)}
                  >
                    Signup
                  </NavLink>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;

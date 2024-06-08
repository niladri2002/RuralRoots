import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = ({ onLogout }) => {
  return (
    <MainHeader>
      <NavLink to="/">
       
        <img src="./images/logo.jpg" alt="my logo img" />
      </NavLink>
      <Nav onLogout={onLogout}/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
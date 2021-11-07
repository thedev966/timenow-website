import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import hamburgerIcon from "../assets/icons/hamburger-icon.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <HamburgerIcon src={hamburgerIcon} alt="hamburger-icon" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 90%;
  margin: 27px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 26px;
  height: 26px;
`;

const HamburgerIcon = styled.img`
  width: 22px;
  height: 22px;
`;

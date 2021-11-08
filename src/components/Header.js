import React, { useState } from "react";
import styled, { css } from "styled-components";
import logo from "../assets/icons/logo.svg";
import hamburgerIcon from "../assets/icons/hamburger-icon.svg";

const Header = () => {
  const [isOpenedNavbar, setIsOpenedNavbar] = useState(false);

  const handleHamburger = (e) => {
    if (isOpenedNavbar) {
      setIsOpenedNavbar(false);
      document.body.style.overflow = "unset";
    } else {
      setIsOpenedNavbar(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <HamburgerIcon
        src={hamburgerIcon}
        alt="hamburger-icon"
        onClick={handleHamburger}
      />
      <Navbar active={isOpenedNavbar}>
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>Pricing</NavbarItem>
        <CTAButton>Start Scheduling</CTAButton>
      </Navbar>
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

  @media only screen and (min-width: 600px) {
    justify-content: unset;
    position: relative;
    margin: 50px auto;
  }
`;

const Logo = styled.img`
  width: 26px;
  height: 26px;
  z-index: 10;
`;

const HamburgerIcon = styled.img`
  width: 22px;
  height: 22px;
  z-index: 10;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Navbar = styled.ul`
  opacity: 1;
  visibility: visible;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e1fbff;
  list-style-type: none;
  z-index: 5;
  transition: all 0.2s ease-in;

  ${({ active }) =>
    !active &&
    css`
      opacity: 0;
      visibility: hidden;
    `};

  @media only screen and (min-width: 600px) {
    position: unset;
    opacity: 1;
    visibility: visible;
    background-color: transparent;
    flex-direction: row;
    margin-left: 10%;
  }
`;

const NavbarItem = styled.li`
  font-size: 1.18rem;
  font-weight: 500;
  color: var(--dark-green);
  margin-bottom: 5%;
  border-bottom: 1px solid transparent;
  padding-bottom: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid var(--dark-green);
  }

  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
    font-size: 0.93rem;
    font-weight: 400;
    color: var(--dark-purple);
    padding-top: 4px;
    margin-right: 24px;
  }
`;

const CTAButton = styled.button`
  padding: 18px;
  border-radius: 5px;
  border: 0px;
  font-size: 0.92rem;
  font-weight: 600;
  color: white;
  background: var(--dark-purple);
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    background: transparent;
    color: var(--dark-purple);
    font-weight: 700;
    border: 2px solid var(--dark-purple);
  }

  @media only screen and (min-width: 600px) {
    position: absolute;
    right: 0;
    padding: 16px;
    font-size: 0.9rem;
  }
`;

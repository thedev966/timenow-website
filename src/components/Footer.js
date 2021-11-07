import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import FooterLinksList from "./FooterLinksList";
import SubscribeBox from "./SubscribeBox";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="logo" />
      <FooterLinks>
        <FooterLinksList
          heading="Product"
          items={["Homepage", "Pricing", "Features"]}
        />
        <FooterLinksList
          heading="Help"
          items={["Live Chat", "Send Email", "FAQ"]}
        />
        <FooterLinksList
          heading="Company"
          items={["About", "Customers", "Blog"]}
        />
      </FooterLinks>
      <SubscribeBox />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 90%;
  margin: 8% auto;
  text-align: left;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

const FooterLinks = styled.div`
  width: 100%;
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
`;

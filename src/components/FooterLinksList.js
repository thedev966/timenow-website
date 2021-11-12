import React from "react";
import styled from "styled-components";

const FooterLinksList = ({ heading, items }) => {
  return (
    <ListContainer>
      <Heading>{heading}</Heading>
      <Items>
        {items.map((item) => (
          <LinkItem>{item}</LinkItem>
        ))}
      </Items>
    </ListContainer>
  );
};

export default FooterLinksList;

const ListContainer = styled.div`
  text-align: left;
  width: 50%;

  @media only screen and (min-width: 600px) {
    width: 30%;
  }
`;

const Heading = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 14px;

  @media only screen and (min-width: 600px) {
    font-size: 1.02rem;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

const LinkItem = styled.a`
  font-size: 0.97rem;
  font-weight: 400;
  color: var(--dark-green);

  @media only screen and (min-width: 600px) {
    font-size: 0.9rem;
    color: var(--dark-purple);
  }
`;

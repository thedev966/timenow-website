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
`;

const Heading = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 14px;
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
`;

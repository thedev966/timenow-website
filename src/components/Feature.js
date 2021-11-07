import React from "react";
import styled, { css } from "styled-components";

const Feature = ({
  subheading,
  heading,
  description,
  button,
  isLargeButton,
}) => {
  return (
    <FeatureContainer>
      <Subheading>{subheading}</Subheading>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <Button isLargeButton={isLargeButton}>
        {button} {!isLargeButton && "→"}
      </Button>
    </FeatureContainer>
  );
};

export default Feature;

const FeatureContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const Subheading = styled.h4`
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--light-purple);
  margin-bottom: 8px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-green);
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 25px;
  color: var(--dark-purple);
  margin-bottom: 22px;
`;

const Button = styled.button`
  padding: 18px 22px;
  border-radius: 5px;
  border: 0px;
  font-size: 0.98rem;
  font-weight: 600;
  color: white;
  background: var(--dark-purple);

  ${({ isLargeButton }) =>
    !isLargeButton &&
    css`
      border-radius: 0px;
      color: var(--dark-green);
      background: transparent;
      padding: 0;
    `};
`;

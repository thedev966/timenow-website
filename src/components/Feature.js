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

  @media only screen and (min-width: 600px) {
    font-size: 0.94rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-green);
  margin-bottom: 12px;

  @media only screen and (min-width: 600px) {
    font-size: 1.82rem;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 900px) {
    font-size: 1.62rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 25px;
  color: var(--dark-purple);
  margin-bottom: 22px;

  @media only screen and (min-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 900px) {
    font-size: 0.92rem;
    line-height: 21px;
  }
`;

const Button = styled.button`
  padding: 18px 22px;
  border-radius: 5px;
  border: 0px;
  font-size: 0.98rem;
  font-weight: 600;
  color: white;
  background: var(--dark-purple);

  @media only screen and (min-width: 900px) {
    padding: 14px 18px;
    font-size: 0.9rem;

    ${({ isLargeButton }) =>
      !isLargeButton &&
      css`
        padding: 14px 0;
      `};
  }

  ${({ isLargeButton }) =>
    !isLargeButton &&
    css`
      border-radius: 0px;
      color: var(--dark-green);
      background: transparent;
      padding: 0;
    `};
`;

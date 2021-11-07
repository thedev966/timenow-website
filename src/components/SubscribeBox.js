import React from "react";
import styled from "styled-components";

const SubscribeBox = () => {
  return (
    <SubscribeBoxContainer>
      <Heading>Try TweetNow</Heading>
      <ButtonContainer>
        <Input type="email" placeholder="Email Address" />
        <Button>Start Scheduling</Button>
      </ButtonContainer>
    </SubscribeBoxContainer>
  );
};

export default SubscribeBox;

const SubscribeBoxContainer = styled.div`
  margin-top: 25px;
`;

const Heading = styled.h2`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 6px;
  overflow: hidden;
  padding: 5px;
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  padding: 15px;
  border: 0;
  outline: none;
  color: var(--dark-green);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Button = styled.button`
  width: 50%;
  height: 50px;
  padding: 15px;
  flex: 1;
  border: 0;
  outline: none;
  color: white;
  background-color: var(--dark-purple);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;

  &:hover {
    opacity: 0.8;
  }
`;

import React from "react";
import styled from "styled-components";
import AvatarList from "./AvatarList";

const MainContent = () => {
  return (
    <MainContentContainer>
      <TitleContainer>
        <Title>TimeNow is used by the most influential people.</Title>
        <AvatarList />
      </TitleContainer>
      <TextContainer>
        <Text>
          The most influential people on Facebook, Twitter and Instagram are
          using TweetNow to schedule posts when their followers are most active.
        </Text>
        <Text>
          They generally receive 23% more engagement than people who do not.
        </Text>
      </TextContainer>
    </MainContentContainer>
  );
};

export default MainContent;

const MainContentContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 125% auto 0 auto;

  @media only screen and (min-width: 600px) {
    margin: 16% auto 0 auto;
  }

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2vw;
    margin: 20% auto 0 auto;
  }

  @media only screen and (min-width: 992px) {
    column-gap: 8vw;
  }

  @media only screen and (min-width: 1080px) {
    margin: 11% auto 0 auto;
  }

  @media only screen and (min-width: 1200px) {
    margin: 4% auto 0 auto;
  }
`;

const TitleContainer = styled.div`
  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: flex-start;
  }

  @media only screen and (min-width: 900px) {
    flex-direction: column;
    grid-column: 1 span 1;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  color: var(--dark-purple);
  margin-bottom: 25px;

  @media only screen and (min-width: 600px) {
    font-size: 1.82rem;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.9rem;
    padding-right: 10%;
  }

  @media only screen and (min-width: 900px) {
    padding-right: 0;
    margin-bottom: 8px;
  }
`;

const TextContainer = styled.div`
  margin-top: 30px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    margin-top: 22px;
  }

  @media only screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 4px;
  }
`;

const Text = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 25px;
  color: var(--dark-purple);
  margin-bottom: 22px;

  @media only screen and (min-width: 600px) {
    font-size: 0.98rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 0.95rem;
    margin-bottom: 18px;
  }
`;

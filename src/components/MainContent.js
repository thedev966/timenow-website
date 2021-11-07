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
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  color: var(--dark-purple);
  margin-bottom: 25px;
`;

const TextContainer = styled.div`
  margin-top: 30px;
  text-align: left;
`;

const Text = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 25px;
  color: var(--dark-purple);
  margin-bottom: 22px;
`;

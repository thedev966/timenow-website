import React from "react";
import styled from "styled-components";
import shiedlIcon from "../assets/icons/shield.svg";
import heroImage from "../assets/images/Mockup.png";

const HeroBox = () => {
  return (
    <HeroBoxContainer>
      <Content>
        <Title>Post when your audience is most active.</Title>
        <Description>
          With TimeNow, automatically schedule your posts on Twitter, LinkedIn
          and Instagram to post when your followers are most active.
        </Description>
        <Buttons>
          <ScheduleButton>Start Scheduling</ScheduleButton>
          <DemoButton>View Demo</DemoButton>
        </Buttons>
        <SubtitleContainer>
          <ShieldIcon src={shiedlIcon} />
          <SubtitleContent>
            <Text>TimeNow does not sell your data</Text>
            <Link>Learn more</Link>
          </SubtitleContent>
        </SubtitleContainer>
      </Content>
      <ImageContainer>
        <Image src={heroImage} />
      </ImageContainer>
    </HeroBoxContainer>
  );
};

export default HeroBox;

const HeroBoxContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Content = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-top: 45px;
  color: var(--dark-purple);
`;

const Description = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  text-align: left;
  margin-top: 13px;
  line-height: 25px;
  color: var(--dark-purple);
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const ScheduleButton = styled.button`
  flex: 1;
  padding: 22px;
  border-radius: 5px;
  border: 0px;
  font-size: 0.98rem;
  font-weight: 600;
  color: white;
  background: var(--dark-purple);
`;

const DemoButton = styled(ScheduleButton)`
  background: transparent;
  color: var(--dark-green);
`;

const SubtitleContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

const ShieldIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SubtitleContent = styled.div`
  margin-left: 15px;
  text-align: left;
`;

const Text = styled.p`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark-purple);
`;

const Link = styled.a`
  display: inline-block;
  font-size: 1.03rem;
  font-weight: 700;
  color: var(--dark-green);
  border-bottom: 2px solid var(--dark-green);
  margin-top: 2px;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: var(--arctic-blue);
  margin-top: 40px;
  padding: 40px 30px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

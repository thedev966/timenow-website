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
            <Text>TimeNow does not sell your data.</Text>
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

  @media only screen and (min-width: 600px) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Content = styled.div`
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 7;
    margin-right: 12%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-top: 45px;
  color: var(--dark-purple);

  @media only screen and (min-width: 600px) {
    margin-top: 10px;
    font-size: 1.82rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 1080px) {
    margin-top: 45px;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  text-align: left;
  margin-top: 13px;
  line-height: 25px;
  color: var(--dark-purple);

  @media only screen and (min-width: 600px) {
    font-size: 0.98rem;
    line-height: 24px;
  }

  @media only screen and (min-width: 900px) {
    font-size: 1.03rem;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;

  @media only screen and (min-width: 600px) {
    width: 75%;
    flex-direction: column;
    align-items: unset;
  }

  @media only screen and (min-width: 900px) {
    width: 100%;
    flex-direction: row;
  }
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

  @media only screen and (min-width: 600px) {
    padding: 18px;
    font-size: 0.94rem;
  }
`;

const DemoButton = styled(ScheduleButton)`
  background: transparent;
  color: var(--dark-green);
`;

const SubtitleContainer = styled.div`
  display: flex;
  margin-top: 25px;
  max-width: 270px;

  @media only screen and (min-width: 600px) {
    margin-top: 14px;
  }

  @media only screen and (min-width: 900px) {
    margin-top: 18px;
    max-width: unset;
  }
`;

const ShieldIcon = styled.img`
  width: 30px;
  height: 30px;

  @media only screen and (min-width: 600px) {
    width: 22px;
    height: 22px;
  }
`;

const SubtitleContent = styled.div`
  margin-left: 15px;
  text-align: left;

  @media only screen and (min-width: 900px) {
    margin-left: 9px;
    margin-top: 2px;
  }
`;

const Text = styled.p`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark-green);

  @media only screen and (min-width: 600px) {
    font-size: 0.92rem;
  }
`;

const Link = styled.a`
  display: inline-block;
  font-size: 1.03rem;
  font-weight: 700;
  color: var(--dark-green);
  border-bottom: 2px solid var(--dark-green);
  margin-top: 2px;

  @media only screen and (min-width: 600px) {
    font-size: 0.92rem;
    position: absolute;
    bottom: -2px;
    left: 74px;
  }

  @media only screen and (min-width: 768px) {
    left: 76px;
  }

  @media only screen and (min-width: 600px) {
    position: unset;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: var(--arctic-blue);
  margin-top: 40px;
  padding: 40px 30px;

  @media only screen and (min-width: 600px) {
    position: unset;
    grid-column: 7 / 13;
    width: 111%;
    height: 140%;
    margin-top: -23vh;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    height: 150%;
    padding: 50px;
  }

  @media only screen and (min-width: 900px) {
    height: 172%;
    margin-top: -23vh;
    padding: 55px;
  }

  @media only screen and (min-width: 992px) {
    padding: 65px;
  }

  @media only screen and (min-width: 1080px) {
    height: 145%;
    padding: 110px;
  }

  @media only screen and (min-width: 1200px) {
    height: 125%;
    padding: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

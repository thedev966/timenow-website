import React from "react";
import styled from "styled-components";
import Feature from "./Feature";

const Features = () => {
  return (
    <FeaturesContainer>
      <Feature
        subheading="Unified Dashboard"
        heading="Customizable dashboard for all platforms."
        description="Use Twitter and Instagram but not LinkedIn? You can customize your dashboard to your liking. You can even schedule the same post to individual platforms instead of all platforms."
        button="Start Scheduling"
        isLargeButton
      />

      <Feature
        subheading="Enhanced Analytics"
        heading="Real-time data that tells you everything."
        description="Get detailed reports of what's working and what isn't. Engagement rates, impressions, views, and much more data is available to you through our in-depth dashboard tool."
        button="View Live Demo"
      />
    </FeaturesContainer>
  );
};

export default Features;

const FeaturesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 35px 5%;
  background-color: var(--light-blue);
`;

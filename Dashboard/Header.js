/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MetricWidget from "./MetricWidget";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <MetricsContainer>
        <MetricWidget value="47.31" description="Avg. Time To Fulfill" />
        <MetricWidget
          title="Time to Fulfill"
          description="Days between Creation task deadline requested"
        />
        <MetricWidget
          title="Time to Fulfill"
          description="Days between Creation task deadline requested"
        />
      </MetricsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export default Header;

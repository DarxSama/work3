/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import Header from "./Dashboard/Header";
import DataTable from "./Dashboard/DataTable";
import TotalImprovementChart from "./Dashboard/TotalImprovementChart";

import ResponsiveAppBar from "./componetns/ResponsiveAppBar";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <ResponsiveAppBar />
      <ContentWrapper>
        <LeftColumn>
          <Header />
          <DataTable />
        </LeftColumn>
        <RightColumn>
          <TotalImprovementChart />
        </RightColumn>
      </ContentWrapper>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.main`
  background: var(--Background, #011625);
  overflow: hidden;
  padding: 40px 35px 0;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const RightColumn = styled.aside`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

export default Dashboard;

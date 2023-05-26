import React from "react";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import styled from "styled-components";

const StyleCommonLayout = styled.div`
  display: flex;
  flex-direction: row;
  .left {
    background: white;
    flex: 1;
  }
  .right {
    display: flex;
    flex-direction: column;
    flex: 4;
    background: #caeae6;
    padding: 30px;
  }
  .header {
    padding-bottom: 30px;
  }
  .mainContent {
    background: #caeae6;
  }
`;

export const CommonLayout = ({ children }) => {
  return (
    <StyleCommonLayout>
      <div className="left">
        <SideBar></SideBar>
      </div>
      <div className="right">
        <div className="header">
          <Header></Header>
        </div>
        <div className="mainContent">{children}</div>
      </div>
    </StyleCommonLayout>
  );
};

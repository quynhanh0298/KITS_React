import React from "react";
import { styled } from "styled-components";
import { Card } from "components/common/Card";
import { ReactComponent as DashboardIcon } from "asserts/dashboard-icon.svg";
import { ReactComponent as MarketIcon } from "asserts/market-icon.svg";
import { ReactComponent as ActiveBidsIcon } from "asserts/active-bids-icon.svg";
import { ReactComponent as MyPortfolioIcon } from "asserts/my-portfolio-icon.svg";
import { ReactComponent as WalletIcon } from "asserts/wallet-icon.svg";
import { ReactComponent as FavouritesIcon } from "asserts/favourites-icon.svg";
import { ReactComponent as HistoryIcon } from "asserts/history-icon.svg";
import { ReactComponent as SettingsIcon } from "asserts/setting-icon.svg";
import SideBarLogo from "asserts/sidebar-logo.svg";
import LightModeIcon from "asserts/light-mode-icon.svg";

const StyledSideBar = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  .profile,
  .other {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  .light-mode {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .light-mode-text {
    font-weight: 500;
    font-size: 16px;
    color: #7a797d;
  }
`;
const StyledSideBarItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  svg {
    path {
      stroke: #7a797d;
    }
  }

  .side-bar-name {
    color: #7a797d;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
`;
const SideBarItem = ({ logo, name }) => {
  const Logo = logo;
  return (
    <StyledSideBarItem>
      <Logo></Logo>
      <div className="side-bar-name">{name}</div>
    </StyledSideBarItem>
  );
};

export const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="sidebar-logo">
        <img src={SideBarLogo} alt="" />
      </div>
      <SideBarItem name="Dashboard" logo={DashboardIcon} />
      <SideBarItem name="Market" logo={MarketIcon} />
      <SideBarItem name="Active Bids" logo={ActiveBidsIcon} />

      <div className="profile">PROFILE</div>

      <SideBarItem name="My Portfolio" logo={MyPortfolioIcon} />
      <SideBarItem name="Wallet" logo={WalletIcon} />
      <SideBarItem name="Favourites" logo={FavouritesIcon} />
      <SideBarItem name="History" logo={HistoryIcon} />
      <SideBarItem name="Settings" logo={SettingsIcon} />

      <div className="other">OTHER</div>
      <div className="light-mode">
        <img src={LightModeIcon} alt="" />
        <div className="light-mode-text">Light Mode</div>
        <div className="toggle"></div> {/* Code pen toggle */}
      </div>

      <Card></Card>
    </StyledSideBar>
  );
};

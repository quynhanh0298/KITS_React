import React from "react";
import { styled } from "styled-components";
import { Card } from "components/common/Card";
import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "asserts/dashboard-icon.svg";
import { ReactComponent as MarketIcon } from "asserts/market-icon.svg";
import { ReactComponent as ActiveBidsIcon } from "asserts/active-bids-icon.svg";
import { ReactComponent as MyPortfolioIcon } from "asserts/my-portfolio-icon.svg";
import { ReactComponent as WalletIcon } from "asserts/wallet-icon.svg";
import { ReactComponent as FavouritesIcon } from "asserts/favourites-icon.svg";
import { ReactComponent as HistoryIcon } from "asserts/history-icon.svg";
import { ReactComponent as SettingsIcon } from "asserts/setting-icon.svg";
// import DashboardIcon from "asserts/dashboard-icon.svg";
// import MarketIcon from "asserts/market-icon.svg";
// import ActiveBidsIcon from "asserts/active-bids-icon.svg";
// import MyPortfolioIcon from "asserts/my-portfolio-icon.svg";
// import WalletIcon from "asserts/wallet-icon.svg";
// import FavouritesIcon from "asserts/favourites-icon.svg";
// import HistoryIcon from "asserts/history-icon.svg";
// import SettingsIcon from "asserts/setting-icon.svg";

import SideBarLogo from "asserts/sidebar-logo.svg";
import LightModeIcon from "asserts/light-mode-icon.svg";
import { Toggle } from "components/common/Toggle";

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
  .active {
    svg {
      path {
        stroke: #5429ff;
        fill: none;
      }
    }
    .side-bar-name {
      color: #5429ff;
    }
  }
`;
const StyledSideBarItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-decoration: none;

  svg {
    path {
      stroke: #7a797d;
      fill: none;
    }
  }

  .side-bar-name {
    color: #7a797d;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
`;
const SideBarItem = ({ logo, name, to }) => {
  const Logo = logo;
  return (
    <StyledSideBarItem to={to}>
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
      <SideBarItem to="/dashboard" name="Dashboard" logo={DashboardIcon} />
      <SideBarItem to="/market" name="Market" logo={MarketIcon} />
      <SideBarItem to="/active-bids" name="Active Bids" logo={ActiveBidsIcon} />
      <div className="profile">PROFILE</div>

      <SideBarItem
        to="/my-portfolio"
        name="My Portfolio"
        logo={MyPortfolioIcon}
      />
      <SideBarItem to="/wallet" name="Wallet" logo={WalletIcon} />
      <SideBarItem to="/favourites" name="Favourites" logo={FavouritesIcon} />
      <SideBarItem to="/history" name="History" logo={HistoryIcon} />
      <SideBarItem to="/settings" name="Settings" logo={SettingsIcon} />

      <div className="other">OTHER</div>
      <div className="light-mode">
        <img src={LightModeIcon} alt="" />
        <div className="light-mode-text">Light Mode</div>
        <Toggle zoom={0.15}></Toggle>
      </div>

      <Card></Card>
    </StyledSideBar>
  );
};

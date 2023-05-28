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
import EthIcon from "asserts/top-up-balance-eth.svg";
import { Button } from "components/common/Button";
import TopUpButtonIcon from "asserts/top-up-balance-icon.svg";
import TopUpButtonArrow from "asserts/top-up-balance-arrow.svg";
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
    gap: 50px;
    align-items: center;
  }
  .light-mode-title {
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

const StyledYourBalanceItem = styled.div`
  width: 228px;
  height: 220px;
  background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
  border-radius: 16px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .your-balance-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .eth {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .eth-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
  .top-up-balance {
    font-weight: 700;
    font-size: 14px;
    color: #27262e;
  }
  .your-balance-text {
    font-weight: 500;
    font-size: 12px;
    color: #e0dee6;
  }
  .your-balance-number {
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 196px;
  height: 49px;
  border-radius: 12px;
`;

const YourBalanceItem = ({ balanceNumber }) => {
  return (
    <StyledYourBalanceItem>
      <div className="your-balance-content">
        <div className="your-balance-text">Your Balance</div>
        <div className="your-balance-number">{balanceNumber}</div>
        <div className="eth">
          <div className="eth-icon">
            <img src={EthIcon} alt="" />
          </div>
          <div className="eth-text">ETH</div>
        </div>
        <StyledButton>
          <img src={TopUpButtonIcon} alt="" />
          <div className="top-up-balance">Top Up Balance</div>
          <img src={TopUpButtonArrow} alt="" />
        </StyledButton>
      </div>
    </StyledYourBalanceItem>
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
        <div className="light-mode-title">
          <img src={LightModeIcon} alt="" />
          <div className="light-mode-text">Light Mode</div>
        </div>
        <Toggle zoom={0.15}></Toggle>
      </div>

      <YourBalanceItem balanceNumber="1,034.02"></YourBalanceItem>
    </StyledSideBar>
  );
};

import { CommonLayout } from "components/layout/CommonLayout";
import { styled } from "styled-components";
import { Button } from "components/common/Button";
import Banner from "asserts/banner.svg";
import TrendingAuctionThumbnail from "asserts/trending-auction-image.svg";
import TrendingAuctionAvatar from "asserts/trending-auction-avatar.svg";
import TrendingAuctionGem from "asserts/trending-auction-gem.svg";
import { Card } from "components/common/Card";
import CreatorAvatar from "asserts/creator-avatar.svg";

const StyledDashboardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  .banner {
    width: 100%;
    background: linear-gradient(
        75.33deg,
        rgba(0, 0, 0, 0.2) -10.41%,
        rgba(0, 0, 0, 0) 62.93%
      ),
      url(${Banner}) no-repeat;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: center;
  }
  .banner-text {
    margin-left: 60px;
    margin-top: 60px;
    margin-right: 60px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    /* or 65px */

    letter-spacing: -0.02em;

    color: #ffffff;
  }
  .buttons {
    margin-left: 60px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 2;
    background: #caeae6;
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
  }
  .trending-auctions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .trending-auctions-title {
    font-weight: 700;
    font-size: 24px;
  }
  .trending-auctions-menus {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
  .trending-auctions-menu {
    font-weight: 500;
    font-size: 14px;
    color: #7a797d;
  }
  .trending-auctions-items-row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cards-row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .top-creators-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .top-creators-title-text {
    font-weight: 700;
    font-size: 24px;
  }
  .see-all {
    font-weight: 500;
    font-size: 16px;
    color: #747475;
  }
  .top-creators {
    background: #ffffff;
    border-radius: 16px;
  }
`;

const StyledTrendingAuctionItem = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 16px;
  .title-and-likes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .avatar-and-account {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .status-and-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .price {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

const TrendingAuctionItem = ({
  thumbnail,
  time,
  title,
  like,
  avatar,
  account,
  status,
  price,
  coinImage,
}) => {
  return (
    <StyledTrendingAuctionItem>
      <div className="item-image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="time">{time}</div>
      <div className="item-info">
        <div className="title-and-likes">
          <div className="title">{title}</div>
          <div className="likes">{like} Likes</div>
        </div>
        <div className="avatar-and-account">
          <img src={avatar} alt="" />
          <div className="account">{account}</div>
        </div>
        <div className="status-and-price">
          <div className="status">{status}</div>
          <div className="price">
            <img src={coinImage} alt="" />
            <span>{price}</span>
            <span>ETH</span>
          </div>
        </div>
      </div>
    </StyledTrendingAuctionItem>
  );
};

const DashboardContent = () => {
  return (
    <StyledDashboardContent>
      <div className="left">
        <div className="banner">
          <div className="banner-text">
            Discover, Create and Sell Your Own NFT.
          </div>
          <div className="buttons">
            <Button></Button>
            <Button></Button>
          </div>
        </div>
        <div className="trending-auctions">
          <div className="trending-auctions-title">Trending Auctions</div>
          <div className="trending-auctions-menus">
            <div className="trending-auctions-menu">Art</div>
            <div className="trending-auctions-menu">Music</div>
            <div className="trending-auctions-menu">Collectibles</div>
            <div className="trending-auctions-menu">Utility</div>
          </div>
        </div>
        <div className="trending-auctions-items">
          <div className="trending-auctions-items-row">
            <TrendingAuctionItem
              thumbnail={TrendingAuctionThumbnail}
              title="Ape In Love"
              like="21,5K"
              avatar={TrendingAuctionAvatar}
              account="@johnti60"
              status="Current Bid"
              price={9.1}
              coinImage={TrendingAuctionGem}
            />
            <TrendingAuctionItem
              thumbnail={TrendingAuctionThumbnail}
              title="Ape In Love"
              like="21,5K"
              avatar={TrendingAuctionAvatar}
              account="@johnti60"
              status="Current Bid"
              price={9.1}
              coinImage={TrendingAuctionGem}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="cards">
          <div className="cards-row">
            <Card></Card>
            <Card></Card>
          </div>
          <div className="cards-row">
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <div className="top-creators">
          <div className="top-creators-title">
            <div className="top-creators-title-text">Top Creator</div>
            <div className="see-all">See All</div>
          </div>
          <div className="creator-list">
            <Creator
              rankingNumber={1}
              avatar={CreatorAvatar}
              name="Michael Jordan"
              account="@jordan_"
            ></Creator>
            <Creator
              rankingNumber={1}
              avatar={CreatorAvatar}
              name="Michael Jordan"
              account="@jordan_"
            ></Creator>
            <Creator
              rankingNumber={1}
              avatar={CreatorAvatar}
              name="Michael Jordan"
              account="@jordan_"
            ></Creator>
            <Creator
              rankingNumber={1}
              avatar={CreatorAvatar}
              name="Michael Jordan"
              account="@jordan_"
            ></Creator>
          </div>
        </div>
      </div>
    </StyledDashboardContent>
  );
};

const StyledCreator = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  .ranking-number {
    font-weight: 700;
    font-size: 16px;
    color: #27262e;
  }
  .creator-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .creator-name {
    font-weight: 700;
    font-size: 16px;
    color: #27262e;
  }
  .creator-account {
    font-weight: 400;
    font-size: 12px;
    color: #747475;
  }
`;

const Creator = ({ rankingNumber, avatar, name, account }) => {
  return (
    <StyledCreator>
      <div className="ranking-number">{rankingNumber}.</div>
      <div className="creator-avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="creator-info">
        <div className="creator-name">{name}</div>
        <div className="creator-account">{account}</div>
      </div>
      <Button></Button>
    </StyledCreator>
  );
};

const Dashboard = () => {
  return (
    <CommonLayout>
      <DashboardContent></DashboardContent>
    </CommonLayout>
  );
};

export default Dashboard;

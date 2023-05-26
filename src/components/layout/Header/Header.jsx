import React from "react";
import { styled } from "styled-components";
import Search from "asserts/search.svg";
import Bell from "asserts/bell.svg";
import Avatar from "asserts/avatar.svg";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .noti-and-info {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
  .noti {
    position: relative;
    width: 56px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #e9e9e9;
    border-radius: 50%;
  }
  .bell {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translateY(-50%);
  }
  .info {
  }
`;

const StyledSearchBox = styled.div`
  background: white;
  width: 461px;
  height: 56px;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-left: 25px;
  }
  input {
    border: none;
    width: 80%;
  }
  input:focus {
    outline: none;
  }
`;

const SearchBox = () => {
  return (
    <StyledSearchBox>
      <form action="">
        <img src={Search} alt="" />
        <input
          type="text"
          placeholder="Search Item, Collection and Account.."
        />
      </form>
    </StyledSearchBox>
  );
};

export const Header = () => {
  return (
    <StyledHeader>
      <div className="search-box">
        <SearchBox />
      </div>
      <div className="noti-and-info">
        <div className="noti">
          <img className="bell" src={Bell} alt="" />
        </div>
        <div className="info">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </StyledHeader>
  );
};

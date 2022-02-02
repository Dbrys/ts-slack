import React from 'react';
import styled from 'styled-components';
import {
  AccessTimeOutlined,
  HelpOutline,
  SearchRounded,
} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar>D</HeaderAvatar>
        <AccessTimeOutlined />
      </HeaderLeft>
      <HeaderSearch>
        <SearchRounded />
        <input placeholder="Search..." />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--primary-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  margin-left: 20px;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
const HeaderSearch = styled.div`
  opacity: 1;
  background-color: #0c4e8f;
  border-radius: 6px;
  text-align: center;
  flex: 0.4;
  display: flex;
  padding: 0 20px;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  margin-right: 20px;
  text-align: right;

  > .MuiSvgIcon-root {
    padding-left: 10px;
  }
`;

export default Header;

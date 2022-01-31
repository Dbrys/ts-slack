import React from 'react';
import styled from 'styled-components';
import { AccessTimeOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeOutlined />
      </HeaderLeft>
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
const HeaderSearch = styled.div``;
const HeaderRight = styled.div``;

export default Header;

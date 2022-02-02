import { Avatar } from '@material-ui/core';
import { EditRounded, FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Channels from './Channels';
import MenuItems from './MenuItems';

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <LeftSideBarHeader>
          <h2>TS-Slack</h2>
          <UserIndicator>
            <FiberManualRecord />
            <h3>Dbrys</h3>
          </UserIndicator>
        </LeftSideBarHeader>
        <RightSideBarHeader>
          <Avatar>
            <EditRounded />
          </Avatar>
        </RightSideBarHeader>
      </SideBarHeader>
      <MenuItems />
      <Channels />
    </SideBarContainer>
  );
}
const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 20%;
  color: white;
  background-color: var(--primary-color);
`;

const SideBarHeader = styled.div`
  display: flex;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
  width: 100%;
  height: 10%;
  align-content: center;
  justify-content: space-between;
`;

const LeftSideBarHeader = styled.div`
  margin: 10px;
`;

const UserIndicator = styled.div`
  display: flex;
`;

const RightSideBarHeader = styled.div`
  margin: 10px;
  > .MuiAvatar-root {
    background-color: white;
    color: black;
    :hover {
      opacity: 0.5;
    }
  }
`;

export default SideBar;

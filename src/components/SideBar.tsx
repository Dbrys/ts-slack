import { FiberManualRecord, CreateRounded } from '@material-ui/icons';
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
          <CreateRounded />
        </RightSideBarHeader>
      </SideBarHeader>
      <MenuItems />
      <Channels />
    </SideBarContainer>
  );
}
const SideBarContainer = styled.div`
  flex: 0.2;
  margin-top: 60px;
  flex-direction: column;
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

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 10px;
  }
`;

const UserIndicator = styled.div`
  display: flex;
  align-items: center;
  > h3 {
    font-size: 13px;
    font-weight: 400;
  }
`;

const RightSideBarHeader = styled.div`
  margin: 10px;

  > .MuiSvgIcon-root {
    padding: 4px;
    background-color: white;
    color: black;
    border-radius: 99px;
    :hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export default SideBar;

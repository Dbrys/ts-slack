import {
  FiberManualRecord,
  CreateRounded,
  DraftsRounded,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Channels from './Channels';
import SideBarOption from './SideBarOption';

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <LeftSideBarHeader>
          <h2>TS-Slack</h2>
          <h3>
            <FiberManualRecord />
            Dbrys
          </h3>
        </LeftSideBarHeader>
        <RightSideBarHeader>
          <CreateRounded />
        </RightSideBarHeader>
      </SideBarHeader>
      <SideBarOption Icon={DraftsRounded} titleText="Messages" />
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
  justify-content: space-between;
`;

const LeftSideBarHeader = styled.div`
  margin: 10px;
  > h2 {
    font-size: 15px;
    font-weight: 900;
  }
  > h3 {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

const RightSideBarHeader = styled.div`
  margin: 10px;

  > .MuiSvgIcon-root {
    padding: 4px;
    font-size: 18px;
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

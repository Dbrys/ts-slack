import React from 'react';
import styled from 'styled-components';

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader> Testing</SideBarHeader>
    </SideBarContainer>
  );
}
const SideBarContainer = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: 20%;
  color: white;
  background-color: var(--primary-color);
`;

const SideBarHeader = styled.div`
  margin: 10px;
`;

export default SideBar;

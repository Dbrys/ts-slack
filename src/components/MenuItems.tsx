import React from 'react';
import styled from 'styled-components';

const menuExamples = ['Threads', 'Mentions', 'Saved Items', 'Channel Browser'];

function MenuItems() {
  return (
    <MenuContainer>
      <ul>
        {menuExamples.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  border-bottom: solid 1px gray;
  > ul {
    margin: 10px 0;
    list-style-type: none;
    padding: 0;
  }
  > ul li {
    padding: 10px;
  }
`;

export default MenuItems;

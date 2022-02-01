import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element;
};

function AppBody({ children }: Props) {
  return <Body>{children}</Body>;
}

const Body = styled.div`
  display: flex;
  padding: 60px 0;
`;

export default AppBody;

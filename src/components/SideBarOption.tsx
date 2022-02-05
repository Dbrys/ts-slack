import React from 'react';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

type SideBarOptionProps = {
  Icon: (props: SvgIconProps) => JSX.Element;
  titleText: string;
};

function SideBarOption({ Icon, titleText }: SideBarOptionProps) {
  return (
    <SideBarOptionContainer>
      <Icon fontSize="small" style={{ padding: 10 }} />
      <TextContainer>{titleText}</TextContainer>
    </SideBarOptionContainer>
  );
}

const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

export default SideBarOption;

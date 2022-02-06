import { MouseEvent } from 'react';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

type SideBarOptionProps = {
  Icon: (props: SvgIconProps) => JSX.Element;
  addChannel?: boolean;
  titleText: string;
};

function SideBarOption({
  Icon,
  titleText,
  addChannel = false,
}: SideBarOptionProps) {
  const handleAddChannel = (e: MouseEvent<HTMLElement>) => {};

  const handleSelect = (e: MouseEvent<HTMLElement>) => {};
  return (
    <SideBarOptionContainer
      onClick={addChannel ? handleAddChannel : handleSelect}
    >
      <Icon fontSize="small" />
      <h4>{titleText}</h4>
    </SideBarOptionContainer>
  );
}

const SideBarOptionContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #053260;
  }
  > h4 {
    font-weight: 500;
    padding-left: 10px;
  }
`;

export default SideBarOption;

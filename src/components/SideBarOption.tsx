import { MouseEvent, useState } from 'react';
import { Input } from '@material-ui/core';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Modal from './Modal';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

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
  const [showAddChannelModal, setShowAddChannelModal] = useState(false);
  const [channelInput, setChannelInput] = useState('');

  const handleModalClose = () => {
    setShowAddChannelModal(false);
  };

  const handleConfirm = async () => {
    const channel = channelInput.trim();
    if (channel) {
      //TODO: Add channel to fireStore db
      try {
        await addDoc(collection(db, 'rooms'), {
          name: channel,
        });

        setShowAddChannelModal(false);
      } catch {}
    }
    return;
  };

  const handleAddChannel = (e: MouseEvent<HTMLElement>) => {
    setShowAddChannelModal(true);
  };

  const handleSelect = (e: MouseEvent<HTMLElement>) => {};
  return (
    <>
      <SideBarOptionContainer
        onClick={addChannel ? handleAddChannel : handleSelect}
      >
        <Icon fontSize="small" />
        <h4>{titleText}</h4>
      </SideBarOptionContainer>
      <Modal
        isOpen={showAddChannelModal}
        header={<>Add channel name below</>}
        body={
          <Input
            fullWidth
            onChange={(event) => setChannelInput(event.target.value)}
          />
        }
        handleClose={handleModalClose}
        handleConfirm={handleConfirm}
        confirmText="Create Channel"
      />
    </>
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

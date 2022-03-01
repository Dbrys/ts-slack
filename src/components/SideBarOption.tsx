import { useState } from 'react';
import { Input } from '@material-ui/core';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Modal from './Modal';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

type SideBarOptionProps = {
  id?: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
  addChannel?: boolean;
  titleText: string;
};

function SideBarOption({
  id = '',
  Icon,
  titleText,
  addChannel = false,
}: SideBarOptionProps) {
  const [showAddChannelModal, setShowAddChannelModal] = useState(false);
  const [channelInput, setChannelInput] = useState('');
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setShowAddChannelModal(false);
  };

  const handleConfirm = async () => {
    const channel = channelInput.trim();
    if (channel) {
      try {
        await addDoc(collection(db, 'rooms'), {
          name: channel,
        });
        setShowAddChannelModal(false);
      } catch {}
    }
    return;
  };

  const handleAddChannel = () => {
    setShowAddChannelModal(true);
  };

  const handleSelect = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <>
      <SideBarOptionContainer
        onClick={addChannel ? handleAddChannel : handleSelect}
      >
        {!!Icon ? <Icon fontSize="small" /> : '#'}
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

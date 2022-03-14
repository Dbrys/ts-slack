import { Button } from '@material-ui/core';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

type ChatInputProps = {
  channelName: string;
  channelId: string;
};

function ChatInput({ channelName, channelId }: ChatInputProps) {
  const inputRef = useRef(null);
  const handleSendMessage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (channelId) return;

    // await setDoc(doc(channelId), {
    //   name: inputRef.current.value
    // });
  };
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder="Message" />
        <Button
          hidden
          style={{ display: 'none' }}
          type="submit"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;

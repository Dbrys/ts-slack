import { Dialog, DialogActions, Button } from '@material-ui/core';
import styled from 'styled-components';

type ModalProps = {
  header: JSX.Element;
  body: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  confirmText?: string;
};

function Modal({
  header,
  body,
  isOpen,
  handleClose,
  handleConfirm,
  confirmText = 'Confirm',
}: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      transitionDuration={0}
    >
      <ModalContainer>
        <h3>{header}</h3>
        <ModalBody>{body}</ModalBody>
        <DialogActions>
          <Button color="secondary" variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" variant="outlined" onClick={handleConfirm}>
            {confirmText}
          </Button>
        </DialogActions>
      </ModalContainer>
    </Dialog>
  );
}

const ModalContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  > h3 {
    padding-bottom: 10px;
  }
`;

const ModalBody = styled.div`
  padding-bottom: 12px;
`;

export default Modal;

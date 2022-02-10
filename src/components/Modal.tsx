import { Dialog, DialogActions, Button } from '@material-ui/core';

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
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      {header}
      {body}
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;

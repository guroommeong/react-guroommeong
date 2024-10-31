export interface CheckModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  modalContent: string | React.ReactNode;
  title?: string;
  onConfirm?: () => boolean;
}

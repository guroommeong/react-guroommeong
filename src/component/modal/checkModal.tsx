import React, { useEffect, useState } from 'react';
import { ModalStyle, OverlayStyle } from './styled';
import ReactModal from 'react-modal';
import { CheckModalProps } from './type';
import { BB1 } from '../../styled/Typography';

const CheckModal: React.FC<CheckModalProps> = ({ isOpen, toggleModal, modalContent }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) setVisible(true);
  }, [isOpen]);

  const handleCloseBtnClick = () => {
    setVisible(false);
    setTimeout(() => {
      toggleModal();
    }, 200); // 애니메이션 지속 시간과 일치
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseBtnClick}
      style={{
        overlay: { zIndex: 1000, background: 'transparent' },
        content: { inset: 'unset', border: 'none', background: 'transparent' },
      }}
      contentElement={(props, children) => (
        <ModalStyle isVisible={visible} {...props}>
          {children}
        </ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle isVisible={visible} {...props}>
          {contentElement}
        </OverlayStyle>
      )}>
      <div style={{ border: '1px solid black', width: '100%' }}>
        <h2>Hello from Modal!</h2>
        <BB1>{modalContent}</BB1>
        <button onClick={handleCloseBtnClick}>Close</button>
      </div>
    </ReactModal>
  );
};

export default CheckModal;

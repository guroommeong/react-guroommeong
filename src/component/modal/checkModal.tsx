import React, { useEffect, useState } from 'react';
import { ModalStyle, OverlayStyle } from './styled';
import ReactModal from 'react-modal';
import { CheckModalProps } from './type';
import { BB1, HB1, HM1 } from '../../styled/Typography';

const CheckModal: React.FC<CheckModalProps> = ({ isOpen, toggleModal, modalContent, title, onConfirm }) => {
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
  const handleConfirmBtnClick = () => {
    const available = onConfirm?.();
    if (!available) return;
    setVisible(false);
    setTimeout(() => {
      toggleModal();
    }, 200); // 애니메이션 지속 시간과 일치
  };

  console.debug('visible', visible);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseBtnClick}
      style={{
        overlay: { zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: { inset: 'unset', border: 'none', borderRadius: 12, height: '80%' },
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
      <div style={{ width: '100%', position: 'relative', textAlign: 'start' }}>
        <HB1 style={{ color: '#35383F', padding: '30px 14px', textAlign: 'center' }}>{title ?? ''}</HB1>

        {modalContent}

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <button
            style={{
              width: 110,
              height: 60,
              backgroundColor: '#95B6F2',
              borderRadius: 8,
              border: 'none',
              color: '#FFF',
              marginRight: 10,
            }}
            onClick={handleCloseBtnClick}>
            취소하기
          </button>
          <button
            style={{
              width: 110,
              height: 60,
              backgroundColor: '#5380D9',
              borderRadius: 8,
              border: 'none',
              color: '#FFF',
            }}
            onClick={handleConfirmBtnClick}>
            확인
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default CheckModal;

import styled, { css } from 'styled-components';

// 스타일 정의
const fadeIn = css`
  opacity: 1;
  transform: translateY(0);
`;

const fadeOut = css`
  opacity: 0;
  transform: translateY(-20px);
`;

// 모달 컨텐츠에 애니메이션 적용
const ModalStyle = styled.div<{ isVisible: boolean }>`
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)};
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: 10% auto;
  text-align: center;
`;

// 오버레이 스타일
const OverlayStyle = styled.div<{ isVisible: boolean }>`
  transition: opacity 0.2s ease;
  ${({ isVisible }) => (isVisible ? 'opacity: 1;' : 'opacity: 0;')};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: orange;
`;

export { ModalStyle, OverlayStyle };

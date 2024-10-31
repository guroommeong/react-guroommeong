import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as DogHead } from '../../../src/assets/dogImage/dogHead.svg';

// 회전 애니메이션 정의
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// 스타일이 적용된 로딩 스피너 컴포넌트
const Spinner = styled.div`
  width: 350px;
  height: 350px;
  border: 4px solid rgba(0, 0, 0, 0.1); /* 배경 색상과 투명도 */
  border-top: 4px solid #5380d9; /* 상단 부분 색상 */
  border-radius: 50%; /* 원형으로 만듦 */
  animation: ${spin} 2s linear infinite; /* 회전 애니메이션 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 강아지 얼굴을 가운데에 고정하는 컨테이너
const DogHeadContainer = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = () => {
  return (
    <Spinner>
      <DogHeadContainer>
        <DogHead width="100%" height="100%" />
      </DogHeadContainer>
    </Spinner>
  );
};

export default LoadingSpinner;

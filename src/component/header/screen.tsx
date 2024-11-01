import React from 'react';
import { HB2 } from '../../styled/Typography'; // HB2 컴포넌트 import 확인
import { ReactComponent as Logo } from '../../../src/assets/dogImage/logo_small.svg';

type HeaderComponentProps = {
  header?: string;
  showLogo?: boolean;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ header, showLogo }) => {
  return (
    <div
      style={{
        width: '100%', // 뷰포트 너비에 맞추기
        height: '73px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10, // 다른 요소들보다 위에 표시
      }}>
      {showLogo && (
        <div
          style={{
            position: 'absolute', // 절대 위치
            left: '20px', // 왼쪽 여백
          }}>
          <Logo />
        </div>
      )}
      <HB2>{header}</HB2>
    </div>
  );
};

export default HeaderComponent;

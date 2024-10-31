import React from 'react';
import { HB2 } from '../../styled/Typography'; // HB2 컴포넌트 import 확인

type HeaderComponentProps = {
  header: string;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ header }) => {
  return (
    <div
      style={{
        width: '100vw', // 뷰포트 너비에 맞추기
        height: '73px',
        background: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10, // 다른 요소들보다 위에 표시
      }}>
      <HB2>{header}</HB2>
    </div>
  );
};

export default HeaderComponent;

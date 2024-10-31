import styled from 'styled-components';
import { HB1, HB2, HM1 } from '../../styled/Typography';
import { useState } from 'react';

export default () => {
  const [isShow, setIsShow] = useState(true);

  if (!isShow) {
    return null;
  }

  return (
    <>
      <FixedLayout>
        {/* TODO: Logo 연결 */}
        <Logo>LOGO</Logo>

        <Guide>
          <HB1>바람멍은</HB1>
          <HM1 style={{ color: '#7199e7' }}>
            <b>AI를 활용</b>하여
            <br />
            <b>제주 여행</b>을 함께할
            <br />
            <b>유기견</b>을 매칭해줍니다
          </HM1>
        </Guide>

        <BottomArea>
          <img src={'/images/dogs.png'} width={'100%'} />
          <Button onClick={() => setIsShow(false)}>시작하기</Button>
        </BottomArea>
      </FixedLayout>
    </>
  );
};

const FixedLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ecf1fa;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 10000;
`;

const Logo = styled.div`
  margin-top: 44px;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  text-align: center;
`;

const BottomArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const Button = styled.button`
  width: calc(100% - 40px);
  height: 50px;
  border-radius: 8px;
  border: 0;
  background-color: #5380d9;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 50px;
`;

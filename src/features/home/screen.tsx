import React from 'react';

import { ReactComponent as DogMainImage } from '../../../src/assets/dogImage/landingDogImg.svg';
import { ReactComponent as ResImage } from '../../../src/assets/button/resImage.svg';
import { ReactComponent as CryDog } from '../../../src/assets/dogImage/cryDog.svg';
import { LostButton, ModalContainer, ResButton } from './styled';
import { BM1, HB2 } from '../../styled/Typography';
import HeaderComponent from '../../component/header/screen';

const HomeScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
      {/* 상단 고정 헤더 */}
      <HeaderComponent header={'메인 홈'} />
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}>
        <HB2 style={{ marginBottom: '20px', marginTop: '31px' }}>안녕하세요 👋</HB2>
        <div
          style={{
            height: '2px',
            width: '37px',
            borderRadius: '10px',
            background: '#7199E7',
          }}
        />
        <BM1 style={{ marginTop: '12px', marginBottom: '33px' }} color={'gray'}>
          바람멍을 통해 소중한 생명을 지켜주세요!
        </BM1>

        <ModalContainer onClick={() => console.log('매칭하기 페이지로 이동')}>
          <div style={{ textAlign: 'left', gap: '6px' }}>
            <HB2>유기견과 매칭하기</HB2>
            <BM1 color={'gray'}>
              AI 매칭 서비스를 통해 나의 여행 일정과 테마에 맞는
              <br />
              임시보호견을 매칭해 드립니다
            </BM1>
          </div>
          <DogMainImage style={{ width: '100%', height: '100%' }} />
        </ModalContainer>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            width: '100%',
            marginTop: '33px',
          }}>
          <ResButton>
            <div style={{ textAlign: 'left', gap: '6px' }}>
              <HB2>예약내역</HB2>
              <BM1>
                내가 예약한 매칭
                <br />
                내역입니다
              </BM1>
            </div>
            <ResImage />
          </ResButton>

          <LostButton>
            <div style={{ textAlign: 'left', gap: '6px', width: '100%' }}>
              <HB2>유기견 찾기</HB2>
              <BM1>
                잃어버렸던 유기견을
                <br />
                검색을 통해 찾습니다
              </BM1>
            </div>
            <CryDog />
          </LostButton>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

import React, { useState } from 'react';
import { BB1, BM1, CM, HB2, HM2 } from '../../styled/Typography';
import HeaderComponent from '../../component/header/screen';
import { ReactComponent as QuestionDog } from '../../../src/assets/dogImage/questionDog.svg';
import { InputTextOwner, StyledImageSquare } from './styled';
import { StyledImage } from '../matching-dog/styled';
import { ReactComponent as GirlImage } from '../../../src/assets/dogImage/girlBlackIcon.svg';
import { ReactComponent as BoyImage } from '../../../src/assets/dogImage/boyIcon.svg';

const AbandonedSearch = () => {
  const [ownerName, setOwnerName] = useState<string>('');
  const [registrationNumber, setRegistrationNumber] = useState<string>('');

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
        position: 'relative', // 부모 요소에 position 설정
      }}>
      <HeaderComponent header={'유기견 찾기'} />
      <HM2 style={{ marginTop: 40 }}>잃어버린 내 유기견을 간단히 찾아요</HM2>

      {/* 구분선 */}
      <div
        style={{
          width: 37,
          height: 2,
          backgroundColor: '#FBBA38',
          marginTop: 16,
          marginBottom: 28,
        }}
      />
      <BM1 color={'gray'} style={{ textAlign: 'center' }}>
        등록번호와 소유자 정보로 동물등록
        <br />
        여부를 확인할 수 있습니다.
      </BM1>

      <div style={{ marginTop: 16 }}>
        <InputTextOwner placeholder={'소유주 이름'} value={ownerName} onChange={e => setOwnerName(e.target.value)} />
        <InputTextOwner
          placeholder={'등록번호'}
          value={registrationNumber}
          onChange={e => setRegistrationNumber(e.target.value)}
        />
      </div>

      <div
        style={{
          width: '100vw',
          height: '137px',
          background: '#FDCE72',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          gap: '85px',
          marginTop: '20px', // 추가 간격 설정
        }}>
        <div>
          <HB2>
            동물등록번호를
            <br />
            아시나요?
          </HB2>
          <CM>자세한 정보는 여기를 확인해주세요!</CM>
        </div>
        <QuestionDog />
      </div>

      <div
        style={{
          width: '100%',
          height: '337px',
          background: '#FEF1D7',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          position: 'relative', // 상대 위치 설정
          zIndex: 5, // 낮은 z-index 설정으로 겹치는 문제 해결
        }}>
        <div
          style={{
            textAlign: 'left',
            width: '530px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <HB2>최근 등록된 유기견</HB2>
          <div
            style={{
              borderRadius: 12,
              width: 440,
              height: 265,
              backgroundColor: 'white',
              position: 'absolute', // 부모 기준으로 절대 위치
              top: '50%', // 세로 중앙 정렬
              left: '50%', // 가로 중앙 정렬
              transform: 'translate(-50%, -50%)', // 중앙 정렬 보정
              marginTop: 10,
              overflowY: 'auto', // 수직 스크롤 활성화
            }}>
            <div
              style={{
                width: '90%',
                margin: '8px auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <StyledImageSquare
                src="https://media.istockphoto.com/id/1853686056/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EC%97%90%EC%84%9C-%ED%9C%B4%EC%8B%9D%EC%9D%84-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.webp?b=1&s=612x612&w=0&k=20&c=Lt8MCrP1H17sH79PdD0-mLiYswNTMZor53Ea1Clf1CU="
                alt="휴식을 취하는 골든 리트리버"
              />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '280px',
                  }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <HB2 style={{ marginRight: 9 }}>미미</HB2>
                    <GirlImage />
                  </div>

                  <CM color={'gray'}>소형견</CM>
                </div>
                <BM1 color={'gray'}>제주동물보호센터</BM1>
                <BM1 color={'gray'}>064-710-4065</BM1>
              </div>
            </div>
            <div style={{ backgroundColor: 'red', width: '90%', margin: '8px auto' }}>
              <StyledImageSquare
                src="https://media.istockphoto.com/id/1853686056/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EC%97%90%EC%84%9C-%ED%9C%B4%EC%8B%9D%EC%9D%84-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.webp?b=1&s=612x612&w=0&k=20&c=Lt8MCrP1H17sH79PdD0-mLiYswNTMZor53Ea1Clf1CU="
                alt="휴식을 취하는 골든 리트리버"
              />
            </div>
            <div style={{ backgroundColor: 'red', width: '90%', margin: '8px auto' }}>
              <StyledImageSquare
                src="https://media.istockphoto.com/id/1853686056/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EC%97%90%EC%84%9C-%ED%9C%B4%EC%8B%9D%EC%9D%84-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.webp?b=1&s=612x612&w=0&k=20&c=Lt8MCrP1H17sH79PdD0-mLiYswNTMZor53Ea1Clf1CU="
                alt="휴식을 취하는 골든 리트리버"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbandonedSearch;

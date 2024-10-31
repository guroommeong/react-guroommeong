import React from 'react';
import HeaderComponent from '../../component/header/screen';
import {
  AICommentContainer,
  Container,
  DogNameTagContainer,
  StyledImage,
  TagContainer,
  VerticalScrollView,
  ContainerWrapper,
} from './styled';
import { BB1, BM1, CB, CM, HB2, HM2 } from '../../styled/Typography';
import { ReactComponent as GirlImage } from '../../../src/assets/dogImage/girlIcon.svg';
import { ReactComponent as BoyImage } from '../../../src/assets/dogImage/boyIcon.svg';

const MarchingDogList = () => {
  // 랜덤 색상 배열
  const colors = ['#FEF1D7', '#9BCAAA', '#95B6F2'];

  // 랜덤 색상 생성 함수
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

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
        backgroundColor: '#ECF1FA',
      }}>
      <HeaderComponent header={'유기견과 매칭하기'} />
      <div
        style={{
          width: 56,
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5380D9',
          borderRadius: '20px',
          marginTop: '13px',
        }}>
        <HB2 style={{ color: '#FFF' }}># 03</HB2>
      </div>

      <HM2 style={{ marginTop: 10 }}>보호자분과 성향이 맞는 유기견</HM2>

      {/* 구분선 */}
      <div
        style={{
          width: 37,
          height: 2,
          backgroundColor: '#7199E7',
          marginTop: 16,
          marginBottom: 16,
        }}
      />

      <AICommentContainer>
        <HB2 color={'gray'}>AI 분석</HB2>
        <BM1 color={'gray'} style={{ padding: '20px' }}>
          안녕하세요, 제주도 여행을 즐기시는 보호자님! 함께 뛰어놀 수 있는 유기견 친구를 찾고 계시는군요. 크기는
          중요하지 않고 적당히 활동적인 친구를 원하시는군요.
        </BM1>
      </AICommentContainer>

      <div style={{ marginTop: '16px', textAlign: 'left', width: '340px', gap: '4px' }}>
        <CM>Keyword</CM>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'row',
            marginTop: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            width: '340px',
          }}>
          <TagContainer>
            <CB style={{ color: '#FEF1D7' }}>활발함</CB>
          </TagContainer>
          <TagContainer>
            <CB style={{ color: '#95B6F2' }}>크기무관</CB>
          </TagContainer>
          <TagContainer>
            <CB style={{ color: '#9BCAAA' }}>적당히 활동적</CB>
          </TagContainer>
          <TagContainer>
            <CB style={{ color: '#9BCAAA' }}>적당히 활동적</CB>
          </TagContainer>
        </div>
      </div>

      <VerticalScrollView>
        <ContainerWrapper>
          {[...Array(6)].map((_, index) => {
            return (
              <Container num={index} key={index}>
                <StyledImage
                  src="https://media.istockphoto.com/id/1853686056/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EC%97%90%EC%84%9C-%ED%9C%B4%EC%8B%9D%EC%9D%84-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.webp?b=1&s=612x612&w=0&k=20&c=Lt8MCrP1H17sH79PdD0-mLiYswNTMZor53Ea1Clf1CU="
                  alt="휴식을 취하는 골든 리트리버"
                />
                <DogNameTagContainer num={index}>
                  <BB1>아리</BB1>
                </DogNameTagContainer>
                <div
                  style={{
                    paddingLeft: '9px',
                    paddingRight: '9px',
                    display: 'flex', // Flexbox 사용
                    flexDirection: 'row', // 수평 정렬
                    alignItems: 'center', // 세로 가운데 정렬
                    justifyContent: 'space-between',
                  }}>
                  <GirlImage />
                  <div
                    style={{
                      display: 'flex', // Flexbox 사용
                      flexDirection: 'row', // 수평 정렬
                      alignItems: 'center', // 세로 가운데 정렬
                      gap: '8px', // 요소 간의 간격 (필요시 조정)
                    }}>
                    <CM>매칭점수</CM>
                    <BB1>4.5/5</BB1>
                  </div>
                </div>
                <div style={{ width: '100%', textAlign: 'center', justifyContent: 'center', marginTop: '8px' }}>
                  <BM1>활동이 많은 친구</BM1>
                </div>
              </Container>
            );
          })}
        </ContainerWrapper>
      </VerticalScrollView>
    </div>
  );
};

export default MarchingDogList;

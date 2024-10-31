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
import { useLocation, useNavigate } from 'react-router-dom';

const MarchingDogList = () => {
  // 랜덤 색상 배열
  const colors = ['#FEF1D7', '#9BCAAA', '#95B6F2'];
  const location = useLocation();
  const responseData = location.state?.data; // LoadingScreen에서 전달한 데이터 가져오기
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const baseURL = 'http://192.168.0.108:8000';
  const navigate = useNavigate();

  // 예외 처리: 데이터가 없는 경우 기본값 설정
  if (!responseData) {
    console.log('데이터가 없습니다.');
    return <div>데이터가 없습니다. 다시 시도해 주세요.</div>;
  }

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
          {responseData.ai_text}
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
          {responseData.tags.map((tag: string, index: number) => (
            <TagContainer key={index}>
              <CB style={{ color: getRandomColor() }}>{tag}</CB>
            </TagContainer>
          ))}
        </div>
      </div>

      <VerticalScrollView>
        <ContainerWrapper>
          {responseData.recommendations.map((dog: any, index: number) => (
            <Container
              key={dog.dog_id}
              num={index}
              onClick={() =>
                navigate(`/dogDetail/${dog.dog_id}`, { state: { data: dog.dog_id, score: dog.match_score } })
              }>
              <StyledImage
                src={baseURL + dog.dog_image_url} // 전달받은 데이터에서 이미지 URL 사용
                alt={dog.name}
              />
              <DogNameTagContainer num={index}>
                <BB1>{dog.name}</BB1>
              </DogNameTagContainer>
              <div
                style={{
                  paddingLeft: '9px',
                  paddingRight: '9px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {dog.gender === '암컷' ? <GirlImage /> : <BoyImage />}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                  <CM>매칭점수</CM>
                  <BB1>{dog.match_score}/5</BB1>
                </div>
              </div>
              <div style={{ width: '100%', textAlign: 'center', justifyContent: 'center', marginTop: '8px' }}>
                <BM1>{dog.reason}</BM1>
              </div>
            </Container>
          ))}
        </ContainerWrapper>
      </VerticalScrollView>
    </div>
  );
};

export default MarchingDogList;

import React from 'react';
import HeaderComponent from '../../component/header/screen';
import { AICommentContainer, TagContiner } from './styled';
import { BM1, CB, CM, HB2 } from '../../styled/Typography';

const MarchingDogList = () => {
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
      <AICommentContainer>
        <HB2 color={'gray'}>AI 분석</HB2>
        <BM1 color={'gray'} style={{ padding: '20px' }}>
          안녕하세요, 제주도 여행을 즐기시는 보호자님! 함께 뛰어놀 수 있는 유기견 친구를 찾고 계시는군요. 크기는
          중요하지 않고적당히 활동적인 친구를 원하시는군요.
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
            overflowX: 'auto', // 가로 스크롤링 허용
            whiteSpace: 'nowrap', // 줄 바꿈을 방지하여 한 줄로 표시
            scrollbarWidth: 'none',
          }}>
          <TagContiner>
            <CB style={{ color: '#FEF1D7' }}>활발함</CB>
          </TagContiner>
          <TagContiner>
            <CB style={{ color: '#95B6F2' }}>크기무관</CB>
          </TagContiner>
          <TagContiner>
            <CB style={{ color: '#9BCAAA' }}>적당히 활동적</CB>
          </TagContiner>
          <TagContiner>
            <CB style={{ color: '#9BCAAA' }}>적당히 활동적</CB>
          </TagContiner>
          <TagContiner>
            <CB style={{ color: '#9BCAAA' }}>적당히 활동적</CB>
          </TagContiner>
        </div>
      </div>
    </div>
  );
};

export default MarchingDogList;

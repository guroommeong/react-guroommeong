import { useState } from 'react';
import { BB1, BM1, HB1, HB2 } from '../../../styled/Typography';

const HistoryCard = ({ name }: { name: string }) => {
  return (
    <div
      style={{
        position: 'relative',
        boxShadow: '0px 0px 10px 0px #0000001A',
      }}>
      <HB2
        style={{
          padding: '20px 14px',
          position: 'absolute',
          color: '#FFF',
        }}>
        {name}
      </HB2>
      <img
        src={'/images/dog.png'}
        alt={'dog'}
        width={'100%'}
        height={'auto'}
        style={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          //   padding: '20px 14px',
          backgroundColor: '#FFF',
        }}>
        <div style={{ display: 'flex', padding: '20px 14px 0' }}>
          <BM1 style={{ color: '#35383F', minWidth: 80 }}>예약 번호</BM1>

          <BB1>104567</BB1>
        </div>

        <div style={{ display: 'flex', padding: '20px 14px' }}>
          <BM1 style={{ color: '#35383F', minWidth: 80 }}>기간</BM1>

          <BB1>
            2024년 11월 6일 부터
            <br />
            2024년 11월 20일 까지{' '}
            <span
              style={{
                color: '#787C82',
              }}>
              (15일)
            </span>
          </BB1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            backgroundColor: '#7199E7',
            padding: 20,
          }}>
          <BM1 style={{ color: '#FFF' }}>만나기 까지</BM1>
          <HB1 style={{ color: '#FFF', marginLeft: 10 }}>6일</HB1>
          <BM1 style={{ color: '#FFF', marginLeft: 10 }}>남았습니다</BM1>
        </div>
      </div>

      <div
        style={{
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}></div>
    </div>
  );
};

export const ReservationHistory = () => {
  const name = '아리';

  return (
    <div
      style={{
        padding: 20,
      }}>
      <HistoryCard name={name} />
    </div>
  );
};

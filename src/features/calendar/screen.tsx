import React from 'react';
import CalendarComponent from '../../component/calendar/calendarComponent';
import { HB2, HM2, BM1 } from '../../styled/Typography';
import HeaderComponent from '../../component/header/screen';

const Calendar = () => {
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
        position: 'relative',
      }}>
      <HeaderComponent header={'메인 홈'} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {/* Chip */}
        <div
          style={{
            width: 56,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5380D9',
            borderRadius: '20px',
          }}>
          <HB2 style={{ color: '#FFF' }}># 01</HB2>
        </div>

        <HM2
          style={{
            marginTop: 10,
          }}>
          제주여행 🗓일정을 설정해주세요
        </HM2>

        {/* 구분선 */}
        <div
          style={{
            width: 37,
            height: 2,
            backgroundColor: '#7199E7',
            marginTop: 16,
          }}
        />

        <BM1 style={{ marginTop: 12, color: '#787C82', textAlign: 'center' }}>
          여행 일정에 맞춰 유기견을 매칭해 드립니다.
          <br />
          고려해서 설정해주세요.
        </BM1>
      </div>

      {/* 캘린더 */}
      <CalendarComponent />

      {/* 이전, 다음 Button Group */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 20,
          position: 'absolute',
          bottom: 20,
        }}>
        <button
          style={{
            width: 'calc(50% - 20px)',
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#95B6F2',
            borderRadius: 10,
            border: 'none',
          }}>
          <HB2 style={{ color: '#FFF' }}>이전</HB2>
        </button>
        <button
          style={{
            width: 'calc(50% - 20px)',
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5380D9',
            borderRadius: 10,
            border: 'none',
          }}>
          <HB2 style={{ color: '#FFF' }}>다음</HB2>
        </button>
      </div>
    </div>
  );
};

export default Calendar;

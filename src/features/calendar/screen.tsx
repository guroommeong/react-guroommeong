import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from '../../component/calendar/calendarComponent';
import { HB2, HM2, BM1 } from '../../styled/Typography';
import HeaderComponent from '../../component/header/screen';
import { TextArea } from '../../components/textArea/screen';
import useCalendarStore from '../../store/calendar';

const Calendar = () => {
  const navigate = useNavigate();
  const { startDate, endDate } = useCalendarStore();
  const [step, setStep] = useState(1);
  const { tripPlan } = useCalendarStore();

  const elementByStep: {
    [key: number]: { title?: string; description: React.ReactNode; component: React.ReactNode };
  } = {
    1: {
      title: '제주여행 일정을 설정해주세요',
      description: (
        <>
          여행 일정에 맞춰 유기견을 매칭해 드립니다.
          <br />
          고려해서 설정해주세요.
        </>
      ),
      component: <CalendarComponent />,
    },
    2: {
      title: '어떤 여행을 계획하고 계신가요?',
      description: (
        <>
          무슨 테마의 여행을 누구와 함께하실 생각이신가요?
          <br />
          당신은 어떤 사람이신가요?
        </>
      ),
      component: <TextArea />,
    },
  };

  const handlePrev = () => {
    if (step === 1) {
      navigate(-1);
      return;
    }

    setStep(step - 1);
  };

  const handleNext = () => {
    // startDate와 endDate 간의 간격이 1주일 이상인지 확인
    if (step === 1 && endDate) {
      const diff = endDate.getTime() - startDate.getTime();
      const diffDays = diff / (1000 * 60 * 60 * 24);
      if (diffDays < 7) {
        alert('여행 기간은 최소 1주일 이상이어야 합니다.');
        return;
      }
    }
    if (step === 1 && (startDate === endDate || !endDate)) {
      alert('여행 날짜를 선택해주세요.');
      return;
    }

    if (step === 2) {
      if (tripPlan) {
        navigate('/loading');
      }
      alert('내용을 입력해주세요');

      return;
    }
    setStep(step + 1);
  };

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
            marginTop: '13px',
          }}>
          <HB2 style={{ color: '#FFF' }}># 0{step}</HB2>
        </div>

        <HM2
          style={{
            marginTop: 10,
          }}>
          {elementByStep[step].title}
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

        <BM1 style={{ marginTop: 12, color: '#787C82', textAlign: 'center' }}>{elementByStep[step].description}</BM1>
      </div>

      {/* 캘린더 */}
      {elementByStep[step].component}

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
          }}
          onClick={() => {
            handlePrev();
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
          }}
          onClick={() => {
            handleNext();
          }}>
          <HB2 style={{ color: '#FFF' }}>다음</HB2>
        </button>
      </div>
    </div>
  );
};

export default Calendar;

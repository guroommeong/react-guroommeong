import React, { useEffect } from 'react';
import LoadingSpinner from '../../component/loadingSpinner/screen';
import useCalendarStore from '../../store/calendar';
import { usePostTripDogList } from '../../api/dog/mutations';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const { tripPlan, updateTripPlan } = useCalendarStore();
  const { mutateAsync: postTripDogList, isSuccess, isError } = usePostTripDogList();
  const navigate = useNavigate();

  useEffect(() => {
    const postDogHandle = async () => {
      if (tripPlan) {
        try {
          const response = await postTripDogList(tripPlan); // 응답을 기다림
          console.log('response: ', response); // 실제 응답 데이터가 출력됨
          updateTripPlan(''); // 데이터 전송 후 tripPlan 초기화

          // 성공 시 response 데이터를 함께 전달하며 이동
          if (response) {
            navigate('/marchingDogList', { state: { data: response } });
          }
        } catch (error) {
          console.log('Error posting dog list:', error);
        }
      }
    };
    postDogHandle();
  }, [tripPlan, postTripDogList, updateTripPlan, navigate]);

  useEffect(() => {
    if (isError) {
      alert('요청에 실패했습니다. 홈 화면으로 이동합니다.');
      navigate('/');
    }
  }, [isError, navigate]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
      <LoadingSpinner />
    </div>
  );
};

export default LoadingScreen;

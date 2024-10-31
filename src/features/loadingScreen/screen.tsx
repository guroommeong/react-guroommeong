import React, { useEffect } from 'react';
import LoadingSpinner from '../../component/loadingSpinner/screen';
import useCalendarStore from '../../store/calendar';
import { usePostTripDogList } from '../../api/dog/mutations';
import { useNavigate } from 'react-router-dom';
import { postDogList } from '../../api/dog/domain';

const LoadingScreen = () => {
  const { tripPlan, updateTripPlan } = useCalendarStore();
  const { mutate: postTripDogList, isSuccess, isError } = usePostTripDogList();
  const navigate = useNavigate();

  useEffect(() => {
    const postDogHandle = async () => {
      console.log(tripPlan);
      const responce = postTripDogList(tripPlan);
      console.log(responce);
      // await postDogList(tripPlan);
      updateTripPlan('');
    };
    postDogHandle();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate('/marchingDogList');
    }
    if (isError) {
      alert('요청에 실패했습니다. 홈 화면으로 이동합니다.');
      navigate('/');
    }
  }, [isSuccess, isError, navigate]);

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
      <LoadingSpinner />
    </div>
  );
};

export default LoadingScreen;

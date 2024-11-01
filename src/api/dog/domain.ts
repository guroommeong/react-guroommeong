import axiosInstance from '../instance';

const postDogList = (tripRes: string) => {
  return axiosInstance.post('/api/match/', {
    text: tripRes,
  });
};

const testData = () => {
  return axiosInstance.post('/api/match/?dog_id=1');
};

const getDogDetailList = (dogId: number) => {
  console.log('dogId: ', dogId);
  return axiosInstance.post(`/api/match/dog/`, {
    dog_id: dogId,
  });
};

const getDogShowList = () => {
  return axiosInstance.post(`/api/dog/`);
};

const getUserInfoDog = (ownerNumb: number, userName: string) => {
  return axiosInstance.post(`/api/find/`, {
    registration_number: ownerNumb,
    owner: userName,
  });
};

//api/complete/
const postCompleteRes = (date: string, dogId: number, guestName: string) => {
  console.log({ date: date, dog_id: dogId, guest_name: guestName });
  return axiosInstance.post('/api/complete/', {
    date: date,
    dog_id: dogId,
    guest_name: guestName,
  });
};

const getReservationList = (numberID: string) => {
  console.log('numberID :', numberID);
  return axiosInstance.post(`/api/complete/check/`, {
    reservation_number: numberID,
  });
};

export { postDogList, testData, getDogDetailList, getDogShowList, getUserInfoDog, postCompleteRes, getReservationList };

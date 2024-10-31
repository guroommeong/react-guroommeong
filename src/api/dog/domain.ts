import axiosInstance from '../instance';

const postDogList = (tripRes: string) => {
  return axiosInstance.post('/api/match/', {
    text: tripRes,
  });
};

export { postDogList };

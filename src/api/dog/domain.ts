import axiosInstance from '../instance';

const postDogList = (tripRes: string) => {
  return axiosInstance.post('/api/match/', {
    text: tripRes,
  });
};

const testData = () => {
  return axiosInstance.get('/api/match/?dog_id=1');
};

export { postDogList, testData };

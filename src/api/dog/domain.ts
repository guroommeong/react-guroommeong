import axiosInstance from '../instance';

const postDogList = (tripRes: string) => {
  return axiosInstance.post('/api/match/', {
    text: tripRes,
  });
};

const testData = () => {
  return axiosInstance.get('/api/match/?dog_id=1');
};

const getDogDetailList = (dogId: number) => {
  return axiosInstance.get(`api/match/?dog_id=${dogId}`);
};

const getDogShowList = () => {
  return axiosInstance.get(`api/dog`);
};

export { postDogList, testData, getDogDetailList, getDogShowList };

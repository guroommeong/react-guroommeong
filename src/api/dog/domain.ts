import axiosInstance from '../instance';

const postDogList = (params: any) => {
  return axiosInstance.post('/어쩌고/저쩌고', {
    params: {
      ...params,
    },
  });
};

export { postDogList };

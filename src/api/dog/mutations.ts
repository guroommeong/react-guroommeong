import { useMutation } from '@tanstack/react-query';
import { getDogDetailList, getDogShowList, getUserInfoDog, postDogList } from './domain';

export const usePostTripDogList = () => {
  return useMutation({
    mutationFn: async (tripRes: string) => {
      const res = await postDogList(tripRes);
      return res.data;
    },
    onSuccess: res => {
      console.log('SUCCESS!', res.data);
      return res.data;
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

export const useGetDogDetailList = () => {
  return useMutation({
    mutationFn: async (dogId: number) => {
      const res = await getDogDetailList(dogId);
      return res.data;
    },
    onSuccess: res => {
      console.log('SUCCESS!', res.data);
      return res.data;
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

export const useGetDogShowList = () => {
  return useMutation({
    mutationFn: async () => {
      const res = await getDogShowList();
      return res.data;
    },
    onSuccess: res => {
      console.log('SUCCESS!', res.data);
      return res.data;
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

export const useGetUserInfoDog = () => {
  return useMutation({
    mutationFn: async ({ ownerNumber, userName }: { ownerNumber: number; userName: string }) => {
      const res = await getUserInfoDog(ownerNumber, userName);
      return res.data;
    },
    onSuccess: res => {
      console.log('SUCCESS!', res);
      return res;
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

//getUserInfoDog

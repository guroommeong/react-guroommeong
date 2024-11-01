import { useMutation } from '@tanstack/react-query';
import {
  getDogDetailList,
  getDogShowList,
  getUserInfoDog,
  postDogList,
  postCompleteRes,
  getReservationList,
} from './domain';

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
    mutationFn: async ({ dogId }: { dogId: number }) => {
      const res = await getDogDetailList(dogId);
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

export const usePostCompleteRes = () => {
  return useMutation({
    mutationFn: async ({ date, dog_id, guest_name }: { date: string; dog_id: number; guest_name: string }) => {
      const res = await postCompleteRes(date, dog_id, guest_name);
      return res.data;
    },
    onSuccess: res => {
      // reservation_number를 로컬 스토리지에 저장
      if (res && res.reservation_number) {
        localStorage.setItem('reservation_number', res.reservation_number);
        console.log('Reservation number saved to local storage:', res.reservation_number);
      }
      return res;
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

export const useGetReservationList = () => {
  return useMutation({
    mutationFn: async (dogId: string) => {
      const res = await getReservationList(dogId);
      return res.data;
    },
    onSuccess: res => {
      console.log('SUCCESS!', res);
      return res.data;
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

//getReservationList

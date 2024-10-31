import { useMutation } from '@tanstack/react-query';
import { postDogList } from './domain';

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

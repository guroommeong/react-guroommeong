import { useMutation } from '@tanstack/react-query';
import { postDogList } from './domain';

export const usePostTripDogList = () => {
  return useMutation({
    mutationFn: async (tripRes: string) => {
      return await postDogList(tripRes);
    },
    onSuccess: res => {
      console.log('SUCCESS!', res);
    },
    onError: error => {
      console.log('ERROR:', error.message);
    },
  });
};

import { useMutation } from '@tanstack/react-query';
import { postDogList } from './domain';

// export const usePostDogList = () => {
//   return useMutation({
//     mutationFn: async (file_sys_nm: string) => {
//       return await postDogList(file_sys_nm);
//     },
//     onSuccess: res => {
//       console.log('SUCCESS!', res);
//     },
//     onError: error => {
//       console.log('ERROR:', error.message);
//     },
//   });
// };

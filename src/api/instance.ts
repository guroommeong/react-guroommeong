import axios from 'axios';

const baseURL = 'http://192.168.0.108:8000';

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json; charset=utf-8',
  },
});

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  async response => {
    // 토큰 필요 없으므로, 응답 그대로 반환
    return response;
  },
  error => {
    console.log(error);
    if (error.response) {
      return Promise.reject(new Error(`서버로부터 응답을 받지 못했습니다.`));
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      return Promise.reject(new Error('서버로부터 응답을 받지 못했습니다.'));
    } else {
      // 요청 설정 중에 문제가 발생한 경우
      return Promise.reject(new Error('요청을 설정하는 도중 문제가 발생했습니다.'));
    }
  },
);

export default axiosInstance;

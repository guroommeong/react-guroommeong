import axiosInstance from '../instance';

const postDogList = () => {
  return axiosInstance.post('/api/match/', {
    text: '안녕하세요 이번에 혼자 제주도 여행을 오게된 김재형이라고 합니다. 저는 작은 크기의 강아지들을 좋아해요. 제가 활동적인 여행을 좋아해서 같이 뛸 수 있는 친구면 좋겠어요. 나이는 중요하지 않아요. 예민하거나 소심한 친구들은 다가가기 어려울 같아요. 저에게 맞는 친구를 소개시켜주시길 바래요.',
  });
};

export { postDogList };

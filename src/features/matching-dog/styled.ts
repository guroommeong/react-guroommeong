import styled from 'styled-components';

const colors = ['#FEF1D7', '#9BCAAA', '#95B6F2'];

const getRandomColor = (num: number) => {
  return colors[num % colors.length]; // num을 colors 길이로 나눈 나머지를 인덱스로 사용
};

const AICommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding: 10px 0 13px 0;
  gap: 8px;

  width: 340px;
  height: 109px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const TagContainer = styled.div`
  background-color: #35383f;
  padding: 5px 20px;
  border-radius: 20px;
`;

const VerticalScrollView = styled.div`
  width: 400px;
  height: 450px; /* 스크롤 가능한 높이 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */

  padding: 16px;

  border-radius: 8px;
  margin-top: 8px;
  gap: 20px;
  flex-direction: row;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* 아이템을 줄 바꿈하여 2개씩 배치 */
  gap: 20px;
  justify-content: center;
`;
interface ContainerProps {
  num: number;
}

const Container = styled.div<ContainerProps>`
  width: 164px;
  height: 204px;
  background-color: ${({ num }) => getRandomColor(num)};
  border-radius: 8px;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const DogNameTagContainer = styled.div<ContainerProps>`
  position: absolute;
  bottom: 101px; /* 사진의 하단에서 약간 위로 배치 */
  left: 13.5%;
  transform: translateX(-50%);
  background-color: ${({ num }) => getRandomColor(num)};
  border-radius: 4px;
  padding: 4px 10px;
`;

export {
  AICommentContainer,
  TagContainer,
  VerticalScrollView,
  Container,
  StyledImage,
  DogNameTagContainer,
  ContainerWrapper,
};

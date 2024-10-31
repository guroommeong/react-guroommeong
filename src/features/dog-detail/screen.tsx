import { useState } from 'react';
import { BB1, BM1, CB, CM, HB1, HB2, HM2 } from '../../styled/Typography';
import { ReactComponent as GirlImage } from '../../../src/assets/dogImage/girlIcon.svg';
import { ReactComponent as BoyImage } from '../../../src/assets/dogImage/boyIcon.svg';
import { ReactComponent as EmptyStar } from '../../../src/assets/button/EmptyStar.svg';
import { ReactComponent as FilledStar } from '../../../src/assets/button/FilledStar.svg';
import { ReactComponent as HalfStar } from '../../../src/assets/button/HalfStar.svg';



const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;

    // 별점이 현재 별보다 크거나 같을 때는 꽉 찬 별
    if (rating >= starNumber) {
      return <FilledStar key={index} />;
    }

    // 별점이 현재 별보다 0.5 작을 때는 반개 별
    if (rating >= starNumber - 0.5) {
      return <HalfStar key={index} />;
    }

    // 나머지는 빈 별
    return <EmptyStar key={index} />;
  });

  return <div>{stars}</div>;
};

export const DogDetail = () => {
  const [dog, setDog] = useState({
    id: 1,
    name: '초코',
    gender: '수컷',
    dog_image_url: '/images/dogs.png', // 썸네일 이미지
    shelterName: '제주 동물보호센터 (064-710-4065)', // 임시보호소 이름
    matchScore: 0, // 매칭점수
    tags: ['믹스견', '중형', '온순함', '청각장애'], // 0: 견종, 1: 크기, ...random
    age: 4, // 나이
    breedSize: '소형견', // 견종 크기
    characteristics: `어린 나이에 구조되었어요. 사람을 좋아하고 블루베리를 좋아해요. '기다려'라는 개인기가 있어요.`, // 특징
    precautions:
      '소형견은 체구가 작아 쉽게 다칠 수 있으므로 높은 곳에서의 낙상을 주의해야 하고, 체온 유지에 신경 써야 합니다.', // 주의할 점

    shelter: {
      shelter_id: 1,
      name: '행복이네 보호소',
      description: '제주도의 유기동물 보호소입니다. 사랑과 보살핌이 넘치는 곳입니다.',
      contact: '010-1234-5678',
      shelter_image_url: '/media/shelter_photos/%ED%96%89%EB%B3%B5%EC%9D%B4%EB%84%A4.jpg',
    },
  });
  const [isLoading, setIsLoading] = useState(true);

  // 주의할 점
  const precaution = {
    소형: '소형견은 체구가 작아 쉽게 다칠 수 있으므로 높은 곳에서의 낙상을 주의해야 하고, 체온 유지에 신경 써야 합니다.',
    중형: '중형견은 체구가 크고 활동량이 많아 다칠 위험이 높습니다. 높은 곳에서의 낙상을 주의해야 하고, 체온 유지에 신경 써야 합니다.',
    대형: '대형견은 체구가 크고 활동량이 많아 다칠 위험이 높습니다. 높은 곳에서의 낙상을 주의해야 하고, 체온 유지에 신경 써야 합니다.',
  };

  const fetchDogDetail = async () => {
    // TODO: API 연동

    setIsLoading(false);
  };

  //   if (isLoading) {
  //     return null;
  //   }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          height: '100%',
        }}>
        <img src={dog.dog_image_url} width={'auto'} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
            borderTopRightRadius: 10,
            backgroundColor: '#9BCAAA',
            padding: '4px 0',
          }}>
          <HB1>{dog.name}</HB1>
          {dog.gender === '수컷' ? (
            <BoyImage style={{ marginLeft: '10px' }} />
          ) : (
            <GirlImage style={{ marginLeft: '10px' }} />
          )}
          <CB style={{ marginLeft: '10px', color: dog.gender === '수컷' ? 'gray' : '#FFF' }}>{dog.gender}</CB>
        </div>
        <div
          style={{
            borderTopRightRadius: 12,
            backgroundImage: 'linear-gradient(to bottom, #9BCAAA 0%, #9BCAAA 5%, white 30%)',
            padding: '8px 25px 0px',
            flexGrow: 1,
          }}>
          <BM1>
            {dog.shelter.name} {` (${dog.shelter.contact})`}
          </BM1>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <CM>매칭점수</CM>
              <HM2 style={{ marginLeft: 8 }}>{dog.matchScore}/5</HM2>
            </div>

            {/* 별점 */}
            <StarRating rating={4.5} />
          </div>

          {/* 나이, 견종 크기, 색깔 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 12,
              backgroundColor: '#FFF',
              borderRadius: 12,
              padding: '20px 34px',
              boxShadow: '0px 0px 5px 0px #0000001A',
            }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <CM>나이</CM>
              <HM2 style={{ marginTop: 8, whiteSpace: 'nowrap' }}>{dog.age}살</HM2>
            </div>

            {/* 수평 Divide */}
            <div
              style={{
                width: 1,
                height: 74,
                marginLeft: 34,
                marginRight: 25,
                backgroundColor: '#A5A7AC',
              }}
            />

            {/* hash태그 형태로 tags를 2x2로 배치 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                whiteSpace: 'nowrap',
              }}>
              {dog.tags.map((tag, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 0px',
                    borderRadius: 8,
                  }}>
                  <HB2>#{tag}</HB2>
                </div>
              ))}
            </div>
          </div>

          <BB1 style={{ marginTop: 20, textAlign: 'center' }}>특징</BB1>
          <BM1
            style={{
              marginTop: 8,
              textAlign: 'center',
              color: '#35383F',
            }}>
            {dog.shelter?.description}
          </BM1>

          <BB1 style={{ textAlign: 'center', marginTop: 28 }}>주의할 점</BB1>
          <BM1
            style={{
              marginTop: 8,
              textAlign: 'center',
              color: '#35383F',
            }}>
            {precaution[dog.tags[1] as '소형' | '중형' | '대형']}
          </BM1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            position: 'absolute',
            bottom: 20,
          }}>
          <button
            style={{
              width: 'calc(100% - 40px)',
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#191A1C',
              borderRadius: 8,
              border: 'none',
            }}
            onClick={() => {
              //   handlePrev();
            }}>
            <HB2 style={{ color: '#FFF' }}>강아지 선택하기</HB2>
          </button>
        </div>
      </div>
    </>
  );
};

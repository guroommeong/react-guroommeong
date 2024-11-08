import React, { useEffect, useState } from 'react';
import { BB1, BM1, CB, CM, HB1, HB2, HM2 } from '../../styled/Typography';
import { ReactComponent as GirlImage } from '../../../src/assets/dogImage/girlIcon.svg';
import { ReactComponent as BoyImage } from '../../../src/assets/dogImage/boyIcon.svg';
import { ReactComponent as EmptyStar } from '../../../src/assets/button/EmptyStar.svg';
import { ReactComponent as FilledStar } from '../../../src/assets/button/FilledStar.svg';
import { ReactComponent as HalfStar } from '../../../src/assets/button/HalfStar.svg';
import { useGetDogDetailList, usePostCompleteRes } from '../../api/dog/mutations';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckModal from '../../component/modal/checkModal';
import useCalendarStore from '../../store/calendar';
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
  const location = useLocation();
  const responseScore = location.state?.score; // LoadingScreen에서 전달한 데이터 가져오기
  const responseData = location.state?.data; // LoadingScreen에서 전달한 데이터 가져오기
  const baseURL = 'http://192.168.0.108:8000';
  const { startDate, endDate } = useCalendarStore();

  const { mutateAsync: getDogDetail, isSuccess, isError } = useGetDogDetailList();
  const { mutateAsync: postCompleteRes } = usePostCompleteRes();
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
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

  useEffect(() => {
    const getDetailDogList = async () => {
      const res = await getDogDetail({ dogId: responseData });
      setDog(res);
    };
    if (responseData) getDetailDogList();
  }, []);

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

  const commitButton = () => {
    if (responseScore) {
      //TODO: modal띄워서 한번 더 물어보긔
      console.log('강아지 예약하기');
      setIsOpenModal(true);
    } else {
      console.log('보호소 연락하기');
    }
  };

  const formatMonthRange = (date1: Date, date2: Date): string => {
    // 두 날짜 중 빠른 날짜와 늦은 날짜 찾기
    const startDate = new Date(Math.min(date1.getTime(), date2.getTime()));
    const endDate = new Date(Math.max(date1.getTime(), date2.getTime()));

    // 시작 월과 종료 월의 첫 번째와 마지막 날짜 생성
    const startOfMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
    const endOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0); // month + 1, day 0 for end of month

    // 날짜를 'YYYY-MM-DD' 형식으로 포맷팅하는 함수
    const formatDate = (date: Date): string => date.toISOString().split('T')[0];

    return `${formatDate(startOfMonth)}~${formatDate(endOfMonth)}`;
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          height: '100%',
        }}>
        <CheckModal
          isOpen={isOpenModal}
          toggleModal={() => setIsOpenModal(prev => !prev)}
          title="주의사항 안내"
          onConfirm={() => {
            const date1 = new Date(startDate);
            // @ts-ignore
            const date2 = new Date(endDate);
            const formatDate = formatMonthRange(date1, date2);

            postCompleteRes({
              date: formatDate,
              dog_id: responseData,
              guest_name: 'guest',
            });
            navigate('/reservationComplete', { state: { data: dog } });
            return true;
          }}
          modalContent={
            <>
              임시 보호 예약시 아래의 주의사항을 꼭 확인해 주세요.
              <br />
              <br />
              1. 유기견 정보 및 안전 관리
              <br />
              &middot; 임시 보호할 유기견의 성격, 나이, 건강 상태에 대한 정보를 숙지하세요.
              <br />
              &middot; 유기견을 안전하게 이동시키기 위해 적절한 케이지나 안전벨트를 사용하세요. 차량 이동 시 창문을 열지
              않도록 주의하세요.
              <br />
              &middot; 유기견과의 상호작용 시 안전 규정을 준수하고, 다른 동물이나 사람과의 접촉을 조심해 주세요.
              <br />
              &middot; 반려동물에 대한 폭행, 학대, 방치 등의 행위는 절대 금지되며, 이러한 행위가 발견될 경우 즉시 계약이
              종료되고 법적 책임이 따릅니다.
              <br />
              <br />
              2. 보호 환경 및 법적 준수
              <br />
              &middot; 임보자는 반려동물에게 적절한 환경과 보호를 제공해야 하며, 관계 법령을 준수하여야 합니다.
              <br />
              &middot; 새로운 환경에 적응하는 데 도움을 주고, 스트레스를 최소화하기 위한 노력을 해야 합니다.
              <br />
              &middot; 보호소의 시설 이용 규정을 숙지하고, 이를 준수해야 합니다.
              <br />
              <br />
              3. 예약 및 연락
              <br />
              &middot; 여행할 장소가 반려동물 출입 가능한 곳인지 미리 확인하고, 출입이 허용되는 숙소를 예약하세요.
              <br />
              &middot; 예약된 날짜와 시간에 맞추어 보호소에 도착해 주세요. 지연 시 사전에 연락해 주시기 바랍니다.
              <br />
              &middot; 유기견을 보호하는 기간을 명확히 하고, 종료되기 하루 전에 반드시 연락해 주세요.
              <br />
              <br />
              4. 건강 및 비상 대응
              <br />
              &middot; 유기견의 건강 문제나 사고 발생 시 즉시 관련 기관에 연락하고, 필요한 조치를 위해 동물병원 및 비상
              연락처를 준비하세요.
              <br />
              &middot; 임보자는 보호 기간 동안 세부 정보를 보호소에 주기적으로 제공해야 합니다.
              <br />
              <br />
              5. 입양 관련 절차
              <br />
              &middot; 임보자가 입양 의사를 밝힐 경우, 책임자의 판단 하에 별도의 입양 계약서를 작성해야 합니다.
              <br />
              <br />
              &middot; 임시 보호하는 동안 유기견의 안전과 복지를 책임지는 것이 중요합니다. 중간에 포기하지 않도록 마음을
              다잡아 주세요.
              <br />
              <br />
              예약 취소 시 환불 정책을 확인해 주세요.
              <br />
              <br />
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}>
                <input
                  type="checkbox"
                  onChange={() => setIsCheck(prev => !prev)}
                  style={{ width: 25, height: 25 }}></input>
                위 사항을 모두 확인하였으며, 동의합니다.
              </label>
            </>
          }
        />
        <img
          src={`${baseURL}${dog.dog_image_url}?timestamp=${new Date().getTime()}`}
          alt="Dog Image"
          style={{ width: 'auto' }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
            borderTopRightRadius: 10,
            backgroundColor: responseScore ? '#9BCAAA' : '#FDCE72',
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
            backgroundImage: responseScore
              ? 'linear-gradient(to bottom, #9BCAAA 0%, #9BCAAA 5%, white 30%)'
              : 'linear-gradient(to bottom, #FDCE72 0%, #FDCE72 5%, white 30%)',
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
            {responseScore && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <CM>매칭점수</CM>
                <HM2 style={{ marginLeft: 8 }}>{responseScore}/5</HM2>
              </div>
            )}

            {/* 별점 */}
            {responseScore && <StarRating rating={responseScore} />}
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
            onClick={commitButton}>
            {responseScore ? (
              <HB2 style={{ color: '#FFF' }}>강아지 선택하기</HB2>
            ) : (
              <HB2 style={{ color: '#FFF' }}>보호소 연락하기</HB2>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

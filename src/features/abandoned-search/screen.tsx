import React, { useEffect, useState } from 'react';
import { BB1, BM1, CM, HB2, HM2 } from '../../styled/Typography';
import HeaderComponent from '../../component/header/screen';
import { ReactComponent as QuestionDog } from '../../../src/assets/dogImage/questionDog.svg';
import { InputTextOwner, StyledImageSquare } from './styled';
import { ReactComponent as GirlImage } from '../../../src/assets/dogImage/girlBlackIcon.svg';
import { ReactComponent as BoyImage } from '../../../src/assets/dogImage/boyIcon.svg';
import { useGetDogShowList, useGetUserInfoDog } from '../../api/dog/mutations';

const AbandonedSearch = () => {
  const [ownerName, setOwnerName] = useState<string>('');
  const [registrationNumber, setRegistrationNumber] = useState<string>('');
  const [responceNumber, setResponceNumber] = useState<any[]>([]);
  const [responceFindNumber, setFindResponceNumber] = useState<any | null>(null); // 단일 객체로 설정
  const { mutateAsync: getDogShowList } = useGetDogShowList();
  const { mutateAsync: getUserDogDetailList } = useGetUserInfoDog();
  const baseURL = 'http://192.168.0.108:8000';

  useEffect(() => {
    // useGetDogShowList 훅을 호출하여 데이터를 가져옴
    const fetchDogShowList = async () => {
      try {
        const res = await getDogShowList();
        setResponceNumber(res);
      } catch (error) {
        console.error('Error fetching dog show list:', error);
      }
    };
    fetchDogShowList();
  }, [getDogShowList]);

  console.log(responceNumber);

  useEffect(() => {
    // useGetUserDogDetailList 훅을 호출하여 데이터를 가져옴
    const fetchUserDogDetails = async () => {
      try {
        const res = await getUserDogDetailList({
          ownerNumber: parseInt(registrationNumber),
          userName: ownerName,
        });
        console.log('User Dog Details:', res);
        setFindResponceNumber(res);
        setResponceNumber([]);
      } catch (error) {
        console.error('Error fetching user dog details:', error);
      }
    };

    // 조건: ownerName과 registrationNumber가 모두 있을 때만 호출
    if (ownerName && registrationNumber) {
      fetchUserDogDetails();
    }
  }, [ownerName, registrationNumber, getUserDogDetailList]);

  console.log(responceNumber);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
      }}>
      <HeaderComponent header={'유기견 찾기'} />
      <HM2 style={{ marginTop: 40 }}>잃어버린 내 유기견을 간단히 찾아요</HM2>

      <div
        style={{
          width: 37,
          height: 2,
          backgroundColor: '#FBBA38',
          marginTop: 16,
          marginBottom: 28,
        }}
      />
      <BM1 color={'gray'} style={{ textAlign: 'center' }}>
        등록번호와 소유자 정보로 동물등록
        <br />
        여부를 확인할 수 있습니다.
      </BM1>

      <div style={{ marginTop: 16 }}>
        <InputTextOwner placeholder={'소유주 이름'} value={ownerName} onChange={e => setOwnerName(e.target.value)} />
        <InputTextOwner
          placeholder={'등록번호'}
          value={registrationNumber}
          onChange={e => setRegistrationNumber(e.target.value)}
        />
      </div>

      <div
        style={{
          width: '100vw',
          height: '137px',
          background: '#FDCE72',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          gap: '85px',
          marginTop: '20px',
        }}>
        <div>
          <HB2>
            동물등록번호를
            <br />
            아시나요?
          </HB2>
          <CM>자세한 정보는 여기를 확인해주세요!</CM>
        </div>
        <QuestionDog />
      </div>

      <div
        style={{
          width: '100%',
          height: '337px',
          background: '#FEF1D7',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5,
        }}>
        <div
          style={{
            textAlign: 'left',
            width: '530px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <HB2>최근 등록된 유기견</HB2>
          <div
            style={{
              borderRadius: 12,
              width: 440,
              height: 265,
              backgroundColor: 'white',
              position: 'relative', // position을 relative로 변경
              marginTop: 10,
              overflowY: 'auto', // 수직 스크롤 활성화
            }}>
            {(responceNumber && responceNumber.length > 0) || responceFindNumber ? (
              responceNumber.map(dog => (
                <div
                  key={dog.dog_id}
                  style={{
                    width: '90%',
                    margin: '8px auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onClick={() => console.log(dog.dog_id)}>
                  <StyledImageSquare
                    src={baseURL + dog.photo_url}
                    alt={dog.name}
                    style={{ width: 100, height: 100, marginRight: 20 }}
                  />
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '280px',
                      }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <HB2 style={{ marginRight: 9 }}>{dog.name}</HB2>
                        {dog.gender === '암컷' ? <GirlImage /> : <BoyImage />}
                      </div>
                      <CM color={'gray'}>{dog.tags[1]}</CM>
                    </div>
                    <BM1 color={'gray'}>{dog.description}</BM1>
                    <BM1 color={'gray'}>{dog.shelter.name}</BM1>
                    <BM1 color={'gray'}>{dog.shelter.contact}</BM1>
                  </div>
                </div>
              ))
            ) : (
              <BM1 color={'gray'}>유기견 정보가 없습니다.</BM1>
            )}

            {responceFindNumber ? (
              <div
                key={responceFindNumber.dog.dog_id}
                style={{
                  width: '90%',
                  margin: '8px auto',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <StyledImageSquare
                  src={baseURL + responceFindNumber.dog.dog_image_url}
                  alt={responceFindNumber.dog.name}
                  style={{ width: 100, height: 100, marginRight: 20 }}
                />
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '280px',
                    }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <HB2 style={{ marginRight: 9 }}>{responceFindNumber.dog.name}</HB2>
                      {responceFindNumber.dog.gender === '암컷' ? <GirlImage /> : <BoyImage />}
                    </div>
                    <CM color={'gray'}>{responceFindNumber.dog.tags.join(', ')}</CM>
                  </div>
                  <BM1 color={'gray'}>{responceFindNumber.dog.description}</BM1>
                  <BM1 color={'gray'}>소유자: {responceFindNumber.dog.owner}</BM1>
                  <BM1 color={'gray'}>등록번호: {responceFindNumber.dog.registration_number}</BM1>
                  <BM1 color={'gray'}>남은 입양 가능일: {responceFindNumber.dog.remaining_days}일</BM1>

                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <HB2>{responceFindNumber.shelter.name}</HB2>
                    <BM1 color={'gray'}>{responceFindNumber.shelter.description}</BM1>
                    <BM1 color={'gray'}>연락처: {responceFindNumber.shelter.contact}</BM1>
                    <StyledImageSquare
                      src={baseURL + responceFindNumber.shelter.shelter_image_url}
                      alt={responceFindNumber.shelter.name}
                      style={{ width: 100, height: 100, marginTop: 10 }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <BM1 color={'gray'}>유기견 정보가 없습니다.</BM1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbandonedSearch;

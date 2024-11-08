import { useEffect, useState } from 'react';
import { BB1, BM1, HB1, HB2 } from '../../../styled/Typography';
import { useGetReservationList } from '../../../api/dog/mutations';
import HeaderComponent from '../../../component/header/screen';
import { baseURL } from '../../../api/instance';

const HistoryCard = ({
  name,
  startDate,
  endDate,
  Image,
  reservation_number,
}: {
  name: string;
  startDate: string;
  endDate: string;
  Image: string;
  reservation_number: string;
}) => {
  const daysUntilDate = (startDate: string): number => {
    const today = new Date(); // 오늘 날짜
    const targetDate = new Date(startDate); // 시작 날짜

    // 밀리초 단위의 차이를 일 단위로 변환
    const diffInMilliseconds = targetDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24)); // 일 단위로 반올림

    return diffInDays;
  };

  return (
    <div
      style={{
        position: 'relative',
        boxShadow: '0px 0px 10px 0px #0000001A',
      }}>
      <HB2
        style={{
          padding: '20px 14px',
          position: 'absolute',
          color: '#FFF',
        }}>
        {name}
      </HB2>
      <img
        src={baseURL + Image}
        alt={'dog'}
        width={'100%'}
        height={'auto'}
        style={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          //   padding: '20px 14px',
          backgroundColor: '#FFF',
        }}>
        <div style={{ display: 'flex', padding: '20px 14px 0' }}>
          <BM1 style={{ color: '#35383F', minWidth: 80 }}>예약 번호</BM1>

          <BB1>{reservation_number}</BB1>
        </div>

        <div style={{ display: 'flex', padding: '20px 14px' }}>
          <BM1 style={{ color: '#35383F', minWidth: 80 }}>기간</BM1>

          <BB1>
            {startDate}
            <br />
            {endDate}
            <span
              style={{
                color: '#787C82',
              }}></span>
          </BB1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            backgroundColor: '#7199E7',
            padding: 20,
          }}>
          <BM1 style={{ color: '#FFF' }}>만나기 까지</BM1>
          <HB1 style={{ color: '#FFF', marginLeft: 10 }}>6일</HB1>
          <BM1 style={{ color: '#FFF', marginLeft: 10 }}>남았습니다</BM1>
        </div>
      </div>

      <div
        style={{
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}></div>
    </div>
  );
};

export const ReservationHistory = () => {
  const { mutateAsync: getReservationList } = useGetReservationList();
  const [dataSetting, setDataSetting] = useState<any>('');

  useEffect(() => {
    const settingData = async () => {
      const res = localStorage.getItem('reservation_number');
      console.log(res);
      // @ts-ignore
      const data = await getReservationList({ reservation_number: res });
      setDataSetting(data);
    };
    settingData();
  }, []);
  //localStorage.getItem('reservation_number')
  console.log(dataSetting);

  const name = dataSetting.dog_name;

  return (
    <div>
      <HeaderComponent header={'예약 내역'} showLogo />
      <div
        style={{
          padding: 20,
        }}>
        <HistoryCard
          name={name}
          startDate={dataSetting.start_date}
          endDate={dataSetting.end_date}
          Image={dataSetting.dog_image_url}
          reservation_number={dataSetting.reservation_number}
        />
      </div>
    </div>
  );
};

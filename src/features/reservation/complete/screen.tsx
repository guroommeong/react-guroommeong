import { BB1, BM1, HB1 } from '../../../styled/Typography';
import Flicking from '@egjs/react-flicking';

import HeaderComponent from '../../../component/header/screen';
import { ReactComponent as GirlImage } from '../../../../src/assets/dogImage/girlIcon.svg';
import { ReactComponent as BoyImage } from '../../../../src/assets/dogImage/boyIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseURL } from '../../../api/instance';

const walks = [
  {
    name: '협재해수욕장',
    image: '/images/walk1.jpg',
  },
  {
    name: '한담해안산책로',
    image: '/images/walk2.jpg',
  },
  {
    name: '한라수목원',
    image: '/images/walk3.jpg',
  },
  {
    name: '낙천의자공원',
    image: '/images/walk4.jpg',
  },
];

const activities = [
  {
    name: '9.81파크',
    image: '/images/activity1.jpg',
  },
  {
    name: '도치돌 알파카목장',
    image: '/images/activity2.jpg',
  },
  {
    name: '제주 차귀도 요트투어',
    image: '/images/activity3.jpg',
  },
  {
    name: '제주 카약올레',
    image: '/images/activity4.jpg',
  },
];

export const ReservationComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responseData = baseURL + location.state?.data.dog_image_url;
  const name = '아리';
  const gender = '수컷';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
      <HeaderComponent showLogo />
      <HB1 style={{ color: '#35383F' }}>확정되었습니다!</HB1>
      <BM1 style={{ color: '#35383F', marginTop: 10 }}>예약 번호 : 104567.</BM1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        {/* circular thumbnail */}
        <div
          style={{
            width: 114,
            height: 114,
            borderRadius: 50,
            backgroundColor: '#C4C4C4',
            marginTop: 10,
            overflow: 'hidden',
          }}>
          <img src={responseData} width={'100%'} />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6px 8px',
            borderRadius: 10,
            backgroundColor: '#9BCAAA',
            position: 'absolute',
            bottom: -30,
          }}>
          <BB1>{name}</BB1>
          {gender === '수컷' ? (
            <BoyImage style={{ marginLeft: '10px' }} />
          ) : (
            <GirlImage style={{ marginLeft: '10px' }} />
          )}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 40,
          gap: '60px',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onClick={() => navigate('/')}>
          {/* home icon */}
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42.7271 14.5407L30.4464 5.94847C27.099 3.60319 21.9607 3.73112 18.7413 6.22564L8.05958 14.5621C5.9275 16.2251 4.24316 19.6364 4.24316 22.3228V37.0341C4.24316 42.4709 8.65656 46.9056 14.0934 46.9056H37.0771C42.5139 46.9056 46.9273 42.4922 46.9273 37.0555V22.6C46.9273 19.7217 45.0724 16.1824 42.7271 14.5407ZM27.1843 38.3773C27.1843 39.2515 26.4594 39.9764 25.5852 39.9764C24.7111 39.9764 23.9862 39.2515 23.9862 38.3773V31.9811C23.9862 31.107 24.7111 30.3821 25.5852 30.3821C26.4594 30.3821 27.1843 31.107 27.1843 31.9811V38.3773Z"
              fill="#35383F"
            />
          </svg>

          <BM1 style={{ marginTop: 6, color: '#A5A7AC' }}>메인 홈</BM1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onClick={() => navigate('/reservationHistory')}>
          {/* calendar icon */}
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.7127 7.59019V4.26415C35.7127 3.39 34.9878 2.66509 34.1137 2.66509C33.2395 2.66509 32.5146 3.39 32.5146 4.26415V7.46226H18.6561V4.26415C18.6561 3.39 17.9312 2.66509 17.0571 2.66509C16.1829 2.66509 15.458 3.39 15.458 4.26415V7.59019C9.70141 8.12321 6.90839 11.5558 6.48198 16.6515C6.43934 17.2698 6.95104 17.7815 7.54802 17.7815H43.6227C44.241 17.7815 44.7527 17.2485 44.6888 16.6515C44.2624 11.5558 41.4693 8.12321 35.7127 7.59019Z"
              fill="#35383F"
            />
            <path
              d="M40.5093 31.9811C35.7974 31.9811 31.981 35.7976 31.981 40.5094C31.981 42.1085 32.4287 43.6223 33.2176 44.9015C34.6887 47.3747 37.3964 49.0377 40.5093 49.0377C43.6221 49.0377 46.3298 47.3747 47.801 44.9015C48.5898 43.6223 49.0376 42.1085 49.0376 40.5094C49.0376 35.7976 45.2211 31.9811 40.5093 31.9811ZM44.9227 39.5926L40.3813 43.7928C40.0828 44.07 39.6778 44.2193 39.294 44.2193C38.8889 44.2193 38.4838 44.07 38.164 43.7502L36.0532 41.6394C35.4349 41.0211 35.4349 39.9977 36.0532 39.3794C36.6715 38.7611 37.6949 38.7611 38.3132 39.3794L39.3366 40.4028L42.7479 37.2474C43.3876 36.6504 44.411 36.693 45.0079 37.3327C45.6049 37.9723 45.5623 38.9743 44.9227 39.5926Z"
              fill="#35383F"
            />
            <path
              d="M42.6413 20.9796H8.52807C7.35543 20.9796 6.396 21.939 6.396 23.1117V36.2453C6.396 42.6415 9.59411 46.9056 17.0564 46.9056H27.5675C29.0386 46.9056 30.062 45.4772 29.593 44.0913C29.1666 42.8547 28.8041 41.4902 28.8041 40.5094C28.8041 34.0492 34.0703 28.783 40.5305 28.783C41.1488 28.783 41.7671 28.8257 42.3641 28.9323C43.6434 29.1241 44.7947 28.1221 44.7947 26.8428V23.133C44.7734 21.939 43.8139 20.9796 42.6413 20.9796ZM19.6362 38.8251C19.2311 39.2089 18.6768 39.4434 18.1224 39.4434C17.5681 39.4434 17.0137 39.2089 16.6086 38.8251C16.2249 38.42 15.9903 37.8657 15.9903 37.3113C15.9903 36.757 16.2249 36.2026 16.6086 35.7975C16.8218 35.6057 17.0351 35.4564 17.3122 35.3498C18.1011 35.0087 19.0392 35.2006 19.6362 35.7975C20.02 36.2026 20.2545 36.757 20.2545 37.3113C20.2545 37.8657 20.02 38.42 19.6362 38.8251ZM19.6362 31.3628C19.5296 31.4481 19.423 31.5334 19.3164 31.6187C19.1885 31.704 19.0605 31.7679 18.9326 31.8106C18.8047 31.8745 18.6768 31.9172 18.5488 31.9385C18.3996 31.9598 18.2503 31.9811 18.1224 31.9811C17.5681 31.9811 17.0137 31.7466 16.6086 31.3628C16.2249 30.9577 15.9903 30.4034 15.9903 29.849C15.9903 29.2947 16.2249 28.7404 16.6086 28.3353C17.099 27.8449 17.8452 27.6104 18.5488 27.7596C18.6768 27.7809 18.8047 27.8236 18.9326 27.8875C19.0605 27.9302 19.1885 27.9941 19.3164 28.0794C19.423 28.1647 19.5296 28.25 19.6362 28.3353C20.02 28.7404 20.2545 29.2947 20.2545 29.849C20.2545 30.4034 20.02 30.9577 19.6362 31.3628ZM27.0984 31.3628C26.6934 31.7466 26.139 31.9811 25.5847 31.9811C25.0303 31.9811 24.476 31.7466 24.0709 31.3628C23.6871 30.9577 23.4526 30.4034 23.4526 29.849C23.4526 29.2947 23.6871 28.7404 24.0709 28.3353C24.8811 27.5464 26.3096 27.5464 27.0984 28.3353C27.4822 28.7404 27.7168 29.2947 27.7168 29.849C27.7168 30.4034 27.4822 30.9577 27.0984 31.3628Z"
              fill="#35383F"
            />
          </svg>

          <BM1 style={{ marginTop: 6, color: '#A5A7AC' }}>예약 정보 확인</BM1>
        </div>
      </div>

      <div
        style={{
          width: 'calc(100% - 40px)',
          marginTop: 20,
          padding: '0px 20px',
        }}>
        <BB1>산책로 추천</BB1>
        <Flicking moveType={'snap'} bound={true} align="prev">
          {walks.map((walk, index) => (
            <div
              key={walk.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: 140,
                height: 160,
                borderRadius: 10,
                margin: '4px 4px 0', // 좌우 간격을 좁히기 위해 margin 설정
              }}>
              <img src={walk.image} width={'100%'} height={140} />
              <BM1 style={{ marginTop: 4, color: '#787C82' }}>{walk.name}</BM1>
            </div>
          ))}
        </Flicking>
      </div>

      <div
        style={{
          width: 'calc(100% - 40px)',
          marginTop: 20,
          padding: '0px 20px',
        }}>
        <BB1>활동 추천</BB1>
        <Flicking moveType={'snap'} bound={true} align="prev">
          {activities.map(activitie => (
            <div
              key={activitie.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: 140,
                height: 160,
                borderRadius: 10,
                margin: '4px 4px 0',
              }}>
              <img src={activitie.image} width={'100%'} height={140} />
              <BM1 style={{ marginTop: 4, color: '#787C82' }}>{activitie.name}</BM1>
            </div>
          ))}
        </Flicking>
      </div>
    </div>
  );
};

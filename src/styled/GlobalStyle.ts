import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #fff;
        overflow-x: hidden; /* 수평 스크롤 방지 */
    }

    #root {
        height: 100%;
        width: 100%; /* 전체 화면 사용 */
        padding: 0;
        background-color: #f9f9f9;
    }

    /* 데스크톱 환경 스타일 */
    @media (min-width: 768px) {
        #root {
            width: 40%; /* 데스크톱에서만 90%로 설정 */
            max-width: 1500px; /* 데스크톱에서 최대 너비 */
            margin: 0 auto; /* 중앙 정렬 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 중앙 화면 강조 */
        }
    }

    /* 모바일 환경 스타일 */
    @media (max-width: 767px) {
        #root {
            width: 100%; /* 모바일에서 전체 화면 사용 */
            max-width: none; /* 모바일에서 최대 너비 제한 없음 */
            margin: 0; /* 공백 제거 */
            box-shadow: none; /* 그림자 제거 */
        }
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;

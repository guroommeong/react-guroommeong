// Typography.tsx

import styled from 'styled-components';

type TypographyProps = {
  color?: string;
};

// 개별 타이포그래피 스타일 정의
//header

export const HB1 = styled.h1<TypographyProps>`
  font-weight: bold;
  font-size: 22px;
  color: ${({ color }) => color || 'black'};
`;

export const HM1 = styled.h1<TypographyProps>`
  font-weight: 500;
  font-size: 22px;
  color: ${({ color }) => color || 'black'};
`;

export const HB2 = styled.h2<TypographyProps>`
  font-weight: bold;
  font-size: 18px;
  color: ${({ color }) => color || 'black'};
`;
export const HM2 = styled.h1<TypographyProps>`
  font-weight: 500;
  font-size: 18px;
  color: ${({ color }) => color || 'black'};
`;

//body
export const BB1 = styled.p<TypographyProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
`;

export const BM1 = styled.p<TypographyProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ color }) => color || 'black'};
`;

// Caption
export const CB = styled.span<TypographyProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${({ color }) => color || 'gray'};
`;

export const CM = styled.span<TypographyProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ color }) => color || 'black'};
`;

//button
export const ButtonBold = styled.span<TypographyProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
`;

export const ButtonMedium = styled.span<TypographyProps>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ color }) => color || 'black'};
`;

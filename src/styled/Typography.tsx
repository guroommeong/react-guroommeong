// Typography.tsx

import styled from 'styled-components';

type TypographyProps = {
  color?: string;
};

// 개별 타이포그래피 스타일 정의
export const H1 = styled.h1<TypographyProps>`
  font-size: 2em;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
`;

export const H2 = styled.h2<TypographyProps>`
  font-size: 1.5em;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
`;

export const H3 = styled.h3<TypographyProps>`
  font-size: 1.2em;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
`;

export const Body = styled.p<TypographyProps>`
  font-size: 1em;
  color: ${({ color }) => color || 'black'};
`;

export const Caption = styled.span<TypographyProps>`
  font-size: 0.8em;
  color: ${({ color }) => color || 'gray'};
`;

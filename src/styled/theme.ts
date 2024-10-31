import { TBorderRadius, TTheme } from './type';

const colors = {
  gray: {
    dark: '#191A1C',
    700: '#35383F',
    500: '#787X82',
    300: '#A5A7AC',
    200: '#E8E9Ea',
  },
  blue1: '#5380D9',
  blue2: '#7199E7',
  blue3: '#95B6F2',
  blue4: '#ECF1FA',
  yellow1: '#FBBA38',
  yellow2: '#FDCE72',
  yellow3: '#FEF1D7',
};

const borderRadius: TBorderRadius = {
  1: 8,
  2: 16,
  3: 57,
};

const theme: TTheme = {
  colors,
  borderRadius,
};

export type AppTheme = typeof theme;
export { theme };

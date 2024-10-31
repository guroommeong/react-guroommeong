export type TColorShades = {
  [key: number]: string;
};

export type TColors = {
  gray: {
    dark: string;
    700: string;
    500: string;
    300: string;
    200: string;
  };
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
};

export type TBorderRadius = {
  [key: number]: number;
};

export type TTheme = {
  colors: TColors;
  borderRadius: TBorderRadius;
};

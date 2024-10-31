export type TColorShades = {
  [key: number]: string;
};

export type TColors = {
  text: Record<string, string>;
  bg: Record<string, string>;
  line: Record<string, string>;
  brand: Record<string, string>;
  button: Record<string, string>;
  popup: Record<string, string>;
};

export type TBorderRadius = {
  [key: number]: number;
};

export type TTheme = {
  colors: TColors;
  borderRadius: TBorderRadius;
};

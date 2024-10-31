import { TBorderRadius, TColors, TTheme } from './type';

const colors: TColors = {
  text: {
    primary: '#1C2333',
    secondary: '#747B85',
    on_light: '#FFFFFF',
    red: '#E24545',
    fail: '#DC0000',
    pass: '#2D218C',
    disabled: '#999EA6',
    tempLabel: '#CCCCCC',
    normal: '#274DBB',
    urgent: '#DC0000',
    warning_yellow: '#FBBA08',
    zone1: '#274DBB',
    zone2: '#107700',
  },
  bg: {
    primary: '#FFFFFF',
    white: '#F3F4F6',
    lightBlue: '#274DBB0A',
    lightRed: '#DC00000F',
    gray: '#2D218C0F',
    urgent: '#DC00000F',
    normal: '#274DBB33',
    zone1: '#E3F1FF',
    zone2: '#1077000F',
  },
  line: {
    primary: '#DBDCDF',
    secondary: '#747B85',
    strokeGray: '#E1E1E1',
    dottedBlue: '#274DBB66',
    dimmedGray: '#F4F4F4',
    urgent: '#DC00000F',
    normal: '#274DBB33',
    warning: '#DC000033',
  },
  brand: {
    primary: '#274DBB',
  },
  button: {
    button_blue: '#274DBB',
    button_red: '#E24545',
    button_green: '#0BA879',
    button_white: '#F3F4F6',
    button_gray: '#6A6F76',
    button_distilledGray: '#ACB6C3',
    button_lightGray: '#DBDCDF',
    button_pure_white: '#FFFFFF',
    button_stroke_gray: '#E1E1E1',
    button_light_red: '#F85353',
    button_disabled: '#999EA6',
    button_light_green: '#1DBD8D',
  },
  popup: {
    primary: '#00000066',
  },
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

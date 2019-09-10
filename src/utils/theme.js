const colors = {
  // Primary Palette
  primaryLight: '#c5e4f9',
  primary: '#30c2ff',
  primaryDark: '#2288b3',

  // Error Palette
  errorLight: '#fb8469',
  error: '#ff7262',
  errorDark: '#f24822',

  // Warning Palette
  warning: '#ff6d30',

  // Success Palette
  successLight: '#00cf7f',
  sucess: '#3ec28f',
  successDark: '#19926d',

  // Neutrals Palette
  white: '#fff',
  neutral100: '#fcfcfc',
  neutral200: '#f8f8f8',
  neutral300: '#efefef',
  neutral400: '#d4d4d4',
  neutral500: '#aaa',
  neutral600: '#666',
  neutral700: '#444',
  neutral800: '#2c2c2c',
  neutral900: '#050505',
  black: '#000',

  // SYSTEM COLOURS
  // Font colour
  fontPrimary: '#050505',
  fontAlt: '#fff',

  // Background
  background: '#fff'
};

const typography = {
  fonts: {
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono:
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48],
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600
  },
  lineHeights: {
    condensed: 1.25,
    default: 1.5
  }
};

const theme = {
  typography,
  colors: { ...colors }
  // typography: { ...typography }
};

export default theme;

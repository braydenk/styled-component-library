const colors = {
  blue: '#30c2ff',
  green: '#3ec28f',
  orange: '#ff6d30',
  purple: '#907cff',
  red: '#ff7262',
  yellow: '#ffdb29',
  black: '#000',
  white: '#fff',
  gray: '#efefef',
  text: '#050505'
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
  colors,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128]
};

export default theme;

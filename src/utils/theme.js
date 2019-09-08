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
  primaryFontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  h1: {
    fontSize: '72px',
    fontWeight: 'normal',
    lineHeight: '96px'
  },
  h2: {
    fontSize: '52px',
    fontWeight: '500',
    lineHeight: '68px'
  },
  h3: {
    fontSize: '40px',
    fontWeight: '500',
    lineHeight: '56px'
  },
  h4: {
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '48px'
  },
  h5: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '36px'
  },
  h6: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px'
  },
  p: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '24px'
  },
  textSmall: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '20px'
  }
};

const theme = {
  colors: { ...colors },
  typography: { ...typography }
};

export default theme;

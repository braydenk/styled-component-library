const colors = {
  // Primary Palette
  primary300: '',
  primary400: '#30c2ff',
  primary500: '',

  // Error Palette
  error300: '',
  error400: '#FE8CB9', // #f24822
  error500: '',

  // Warning Palette
  warning300: '',
  warning400: '#E3B858',
  warning500: '',

  // Success Palette
  success300: '',
  success400: 'rgb(62, 194, 143);',
  success500: '',

  // Neutrals Palette
  white: 'hsl(0, 0%, 0%)',
  neutral100: 'hsl(0, 0%, 0%)',
  neutral200: 'hsl(0, 0%, 0%)',
  neutral300: 'hsl(0, 0%, 0%)',
  neutral400: 'hsl(0, 0%, 0%)',
  neutral500: 'hsl(0, 0%, 0%)',
  neutral600: 'hsl(0, 0%, 0%)',
  neutral700: 'hsl(0, 0%, 0%)',
  neutral800: 'hsl(0, 0%, 0%)',
  neutral900: 'hsl(0, 0%, 0%)',
  neutral1000: 'hsl(0, 0%, 0%)',
  black: 'hsl(0, 0%, 100%)',

  // SYSTEM COLOURS
  // Font colour
  fontPrimary: '', // neutral1000
  fontSecondary: '', // neutral800

  // Background
  background: '#fff' // neutral100
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

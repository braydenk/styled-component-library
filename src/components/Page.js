import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const theme = {
  fontStacks: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  colors: {
    neutralPalette: {
      white: '#fff',
      gray200: '#fafafa',
      gray300: '#f5f5f5',
      gray400: '#e8e8e8',
      gray500: '#d9d9d9',
      gray600: '#bfbfbf',
      gray700: '#8c8c8c',
      gray800: '#595959',
      gray900: '#262626',
      black: '#000'
    }
  }
};

function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

export default Page;

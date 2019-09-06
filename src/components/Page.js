import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    box-sizing: border-box;
    font-size: 100%;
    font-family: ${props => props.theme.fontStacks.sansSerif};
    color: ${props => props.theme.colors.black};
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
    accent: '#3d393f6',
    black: 'hsl(0, 0%, 10%)',
    gray: '#a7aeb4',
    lightGray: '#e7e9eb'
  }
};

function Page({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}

export default Page;

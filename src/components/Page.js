import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../utils/global-style';
import theme from '../utils/theme';

function Page({ children }) {
  console.log(theme);
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

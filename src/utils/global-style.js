import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyle = createGlobalStyle`
  /* Include normalize.css first */
  ${normalize}

  html {
    font-size: 100%;
  }

  html, body {
    margin: 0;
    min-height: 100%;
    height: 100%;
  }

  body {
    font-size: 1em;
    line-height: 1.25;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  p {
    margin-top: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;

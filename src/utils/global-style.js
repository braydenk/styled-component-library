import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyle = createGlobalStyle`
  /* Add Normalize.css before changing styles */
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
    font-size: 1em; /* TODO: Variable*/
    line-height: 1.25; /* TODO: Variable*/
    font-weight: 400; /* TODO: Variable*/
    font-family: ${props => props.theme.fontTypes.body};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background: ${props => props.theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 2rem; /* TODO: Variable*/
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

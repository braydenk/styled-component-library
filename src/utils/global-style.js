import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyle = createGlobalStyle`
  /* Include normalize.css first */
  ${normalize}

  html {
    background-color: ${props => props.theme.colors.background};
    min-height: 100%;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    line-height: 1.5;
    color: #000;
    font-feature-settings: "kern";
    font-kerning: normal;
    font-family: ${props => props.theme.typography.primaryFontFamily};
    font-size: 100%;
  }

  /* For create-react-app */
  body, #root {
    min-height: 100vh;
  }

  * { font-weight: inherit; }

  *,
  *::before,
  *::after { box-sizing: inherit; }

  button {
    cursor: pointer;
    padding: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: inherit;
    font-family: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 { font-size: inherit; }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  fieldset,
  figure,
  hr {
    margin: 0;
    padding: 0;
  }

  img { max-width: 100%; }

  svg { max-height: 100%; }
`;

export default GlobalStyle;

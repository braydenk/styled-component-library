export const getFontSize = ({ theme, as = 'p' }) =>
  `font-size: ${theme.typography[as].fontSize}`;

export const getFontWeight = ({ theme, as = 'p' }) =>
  `font-weight: ${theme.typography[as].fontWeight}`;

export const getLineHeight = ({ theme, as = 'p' }) =>
  `line-height: ${theme.typography[as].lineHeight}`;

export const fontFamily = ({ theme }) =>
  `font-family: '${theme.typography.fontFamily}'`;

export const fontSize = ({ theme, as = 'p' }) => {
  return `font-size: ${theme.typography[as].fontSize}`;
};

export const fontWeight = ({ theme, as = 'p' }) =>
  `font-weight: ${theme.typography[as].fontWeight}`;

export const lineHeight = ({ theme, as = 'p' }) =>
  `line-height: ${theme.typography[as].lineHeight}`;

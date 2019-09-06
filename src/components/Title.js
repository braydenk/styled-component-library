import React from 'react';
import styled from 'styled-components';

const getPrimaryFontFamily = props =>
  `font-family: ${props.theme.typography.primaryFontFamily}`;

const getFontSize = ({ theme, as }) =>
  `font-size: ${theme.typography[as].fontSize}`;

const getFontWeight = ({ theme, as }) =>
  `font-weight: ${theme.typography[as].fontWeight}`;

const getLineHeight = ({ theme, as }) =>
  `line-height: ${theme.typography[as].lineHeight}`;

const StyledTitle = styled.h1`
  ${getPrimaryFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLineHeight}
`;

function Title({ level, children }) {
  return <StyledTitle as={`h${level}`}>{children}</StyledTitle>;
}

export default Title;

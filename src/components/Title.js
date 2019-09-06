import React from 'react';
import styled from 'styled-components';
import {
  getFontSize,
  getFontWeight,
  getLineHeight
} from '../utils/styled-component-functions';

const StyledTitle = styled.h1`
  font-family: ${props => props.theme.typography.primaryFontFamily};
  ${getFontSize}
  ${getFontWeight}
  ${getLineHeight}
`;

function Title({ level, children }) {
  return <StyledTitle as={`h${level}`}>{children}</StyledTitle>;
}

export default Title;

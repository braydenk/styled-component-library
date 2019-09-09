import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${props => props.theme.typography.primaryFontFamily};
  font-size: ${props => props.theme.typography[`h${props.level}`].fontSize};
  font-weight: ${props => props.theme.typography[`h${props.level}`].fontWeight};
  line-height: ${props => props.theme.typography[`h${props.level}`].lineHeight};
`;

export const Paragraph = styled.p`
  font-family: ${props => props.theme.typography.primaryFontFamily};
  font-size: ${props => props.theme.typography.p.fontSize};
  font-weight: ${props => props.theme.typography.p.fontWeight};
  line-height: ${props => props.theme.typography.p.lineHeight};
`;

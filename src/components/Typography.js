import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${props => props.theme.typography.fonts.primary};
  font-size: ${props =>
    props.theme.typography.fontSizes[
      props.theme.typography.fontSizes.length - props.level
    ]}px;
  font-weight: ${props => props.theme.typography.fontWeights.normal};
  line-height: ${props => props.theme.typography.lineHeights.default};
  color: ${props => props.theme.colors.text};
`;

export const Paragraph = styled.p`
  font-family: ${props => props.theme.typography.primary};
  font-size: ${props =>
    props.theme.typography.fontSizes[
      props.theme.typography.fontSizes.length - props.level
    ]}px;
  font-weight: ${props => props.theme.typography.fontWeights.normal};
  line-height: ${props => props.theme.typography.lineHeights.default};
`;

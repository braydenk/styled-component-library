import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
`;

const H4 = styled.h4`
  font-size: ${props => props.theme.fontSizes.h4};
`;

const H5 = styled.h5`
  font-size: ${props => props.theme.fontSizes.h5};
`;

const H6 = styled.h6`
  font-size: ${props => props.theme.fontSizes.h6};
`;

function Title({ level, children }) {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;
    case 2:
      return <H2>{children}</H2>;
    case 3:
      return <H3>{children}</H3>;
    case 4:
      return <H4>{children}</H4>;
    case 5:
      return <H5>{children}</H5>;
    case 6:
      return <H6>{children}</H6>;
    default:
      return <H1>{children}</H1>;
  }
}

export default Title;

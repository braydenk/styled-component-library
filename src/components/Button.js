import styled from 'styled-components';
import React from 'react';

const ButtonDefault = styled.button`
  border: none;
  background: ${props => props.theme.colors.blue};
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 4px;
  font-weight: 500;

  :hover {
    background: ${props => props.theme.colors.darkBlue};
  }
`;

const ButtonOutlined = styled(ButtonDefault)`
  border: 1px solid ${props => props.theme.colors.blue};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.blue};
  font-weight: 500;

  :hover {
    background: ${props => props.theme.colors.blue};
    color: #fff;
  }
`;

function Button({ variant, children }) {
  switch (variant) {
    case 'primary':
      return <ButtonDefault>{children}</ButtonDefault>;
    case 'outlined':
      return <ButtonOutlined>{children}</ButtonOutlined>;
    default:
      return <ButtonDefault>{children}</ButtonDefault>;
  }
}

export default Button;

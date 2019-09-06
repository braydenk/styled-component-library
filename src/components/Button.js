import styled from 'styled-components';
import React from 'react';

// const ButtonOutlined = styled(ButtonDefault)`
//   border: 1px solid ${props => props.theme.colors.blue};
//   background: ${props => props.theme.colors.white};
//   color: ${props => props.theme.colors.blue};
//   font-weight: 500;

//   :hover {
//     background: ${props => props.theme.colors.blue};
//     color: #fff;
//   }
// `;

const StyledButtonDefault = styled.button`
  border: none;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 4px;
  font-weight: 500;

  :hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const StyledButtonOutline = styled(StyledButtonDefault)`
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.fontPrimary};

  :hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

function Button({ variant, children }) {
  if (variant === 'outlined') {
    return <StyledButtonOutline>{children}</StyledButtonOutline>;
  }

  return <StyledButtonDefault>{children}</StyledButtonDefault>;
}

export default Button;

import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  background: ${props => props.theme.colors.blue};
  border: ${props => `1px solid ${props.theme.colors.blue}`};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.typography.fonts.primary};
  padding: ${props =>
    `${props.theme.space[1] / 16}rem ${props.theme.space[2] / 16}rem`};
  margin: ${props => `${props.theme.space[1] / 16}rem`};
`;

// const Button = styled.button`
//   background: ${props =>
//     props.primary ? props.theme.colors.blue : props.theme.colors.white};
//   border: ${props =>
//     props.primary ? 'none' : `1px solid ${props.theme.colors.gray}`};
//   color: ${props =>
//     props.primary
//       ? props.theme.colors.fontAlt
//       : props.theme.colors.fontPrimary};
//   padding: 8px 16px;
//   margin: 8px;
//   font-size: ${props => (props.small ? '14px' : '16px')};
//   border-radius: 4px;
//   font-family: ${props => props.theme.typography.fonts.primary};

//   :disabled {
//     background-color: ${props => props.theme.colors.neutral400};
//     color: ${props => props.theme.colors.neutral700};
//     border: none;
//     cursor: not-allowed;

//     :hover {
//       color: ${props => props.theme.colors.neutral700};
//     }
//   }

//   :hover {
//     background: ${props =>
//       props.primary
//         ? props.theme.colors.primary
//         : props.theme.colors.background};
//     opacity: ${props => props.primary && '0.8'};
//     border: ${props =>
//       props.primary ? 'none' : `1px solid ${props.theme.colors.primary}`};
//     color: ${props =>
//       props.primary ? props.theme.colors.fontAlt : props.theme.colors.primary};
//   }
// `;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

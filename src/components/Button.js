import styled from 'styled-components';

const Button = styled.button`
  background: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.background};
  border: ${props =>
    props.primary ? 'none' : `1px solid ${props.theme.colors.neutral500}`};
  color: ${props =>
    props.primary
      ? props.theme.colors.fontAlt
      : props.theme.colors.fontPrimary};
  padding: 8px 16px;
  margin: 8px;
  font-size: ${props => (props.small ? '14px' : '16px')};
  border-radius: 4px;

  :disabled {
    background-color: ${props => props.theme.colors.neutral400};
    color: ${props => props.theme.colors.neutral700};
    border: none;
    cursor: not-allowed;

    :hover {
      color: ${props => props.theme.colors.neutral700};
    }
  }

  :hover {
    background: ${props =>
      props.primary
        ? props.theme.colors.primary
        : props.theme.colors.background};
    opacity: ${props => props.primary && '0.8'};
    border: ${props =>
      props.primary ? 'none' : `1px solid ${props.theme.colors.primary}`};
    color: ${props =>
      props.primary ? props.theme.colors.fontAlt : props.theme.colors.primary};
  }
`;

export default Button;

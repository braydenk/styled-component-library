import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? props.theme.colors.primary : '#fff')};
  border: ${props =>
    props.primary ? 'none' : `1px solid ${props.theme.colors.neutral500}`};
  color: ${props => (props.primary ? '#fff' : props.theme.colors.fontPrimary)};
  padding: 8px 16px;
  margin: 8px;
  font-size: 16px;

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
      props.primary ? props.theme.colors.primary : '#fff'};
    opacity: ${props => props.primary && '0.8'};
    border: ${props =>
      props.primary ? 'none' : `1px solid ${props.theme.colors.primary}`};
    color: ${props =>
      props.primary ? props.theme.colors.white : props.theme.colors.primary};
  }
`;

export default Button;

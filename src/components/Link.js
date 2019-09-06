import styled from 'styled-components';

const Link = styled.a`
  font-size: 1em;
  font-weight: normal;
  font-family: ${props => props.theme.fontTypes.body};
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  :hover {
    text-decoration: underline;
  }
`;

export default Link;

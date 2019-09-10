import styled from 'styled-components';

const Box = styled.div`
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
  background: ${props => props.theme.colors[props.background]};
`;

export default Box;

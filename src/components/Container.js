import styled from 'styled-components';

const width = props => `width: ${props.width}`;
const padding = props => `padding: ${props.padding}`;
const backgroundColor = props => `background-color: ${props.background}`;
const display = props => `display: ${props.display}`;

const Container = styled.div`
  ${width}
  ${padding}
  ${backgroundColor}
  ${display}
`;

export default Container;

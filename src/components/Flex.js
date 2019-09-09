import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  height: ${props => props.height};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

export default Flex;

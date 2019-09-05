import styled from 'styled-components';

const Container = styled.div`
  box-sizing: 'border-box';
  min-width: 0;
  width: ${props => props.width};
  padding: ${props => props.padding};
  background-color: ${props => props.background};
`;

export const FlexContainer = styled(Container)`
  display: flex;
`;

export const GridContainer = styled(Container)`
  display: grid;
`;

export default Container;

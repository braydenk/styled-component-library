import styled from 'styled-components';

const GridItem = styled.div`
  grid-column-start: ${props => props.columnStart};
`;

export default GridItem;

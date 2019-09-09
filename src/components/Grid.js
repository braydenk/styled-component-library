import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  grid-gap: ${props => props.gap};
  grid-template-areas: ${props => props.areas};
  height: ${props => props.height};
`;

export default Grid;

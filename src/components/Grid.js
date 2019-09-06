import styled from 'styled-components';
import React from 'react';

const StyledGrid = styled.div`
  background: cornflowerblue;
  display: grid;
  grid-gap: ${props => props.gap};
  grid-template-columns: ${props => props.columns.join(' ')};
  grid-template-rows: ${props => props.rows.join(' ')};
`;

function Grid({ rows = [], columns = [], gap = 0, children }) {
  return (
    <StyledGrid rows={rows} columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
}

export default Grid;

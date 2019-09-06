import React from 'react';
import Page from './components/Page';
import Grid from './components/Grid';
import Container from './components/Container';

function App() {
  return (
    <Page>
      <Grid rows={['1fr', '1fr', '1fr']} columns={['auto']} gap="10px">
        <Container background="red">1</Container>
        <Container background="red">2</Container>
        <Container background="red">3</Container>
      </Grid>
    </Page>
  );
}

export default App;

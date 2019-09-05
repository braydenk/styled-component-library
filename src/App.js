import React from 'react';
import Page from './components/Page';
import Container from './components/Container';

function App() {
  return (
    <Page>
      <Container background={'tomato'} width="50%">
        Container
      </Container>
    </Page>
  );
}

export default App;

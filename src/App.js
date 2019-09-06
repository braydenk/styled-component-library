import React from 'react';
import Page from './components/Page';
import Container from './components/Container';
import Title from './components/Title';

function App() {
  return (
    <Page>
      <Container>
        <Title level={1}>Hello World</Title>
        <Title level={2}>Hello World</Title>
        <Title level={3}>Hello World</Title>
        <Title level={4}>Hello World</Title>
        <Title level={5}>Hello World</Title>
        <Title level={6}>Hello World</Title>
      </Container>
    </Page>
  );
}

export default App;

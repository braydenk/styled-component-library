import React from 'react';
import Page from './components/Page';
import Title from './components/Title';

function App() {
  return (
    <Page>
      <Title level={1}>Hello, World!</Title>
      <Title level={2}>Hello, World!</Title>
      <Title level={3}>Hello, World!</Title>
      <Title level={4}>Hello, World!</Title>
      <Title level={5}>Hello, World!</Title>
      <Title level={6}>Hello, World!</Title>
    </Page>
  );
}

export default App;

import React from 'react';
import Page from './components/Page';
import Title from './components/Title';
import Text from './components/Text';

function App() {
  return (
    <Page>
      <Title level={1}>Hello, World!</Title>
      <Title level={2}>Hello, World!</Title>
      <Title level={3}>Hello, World!</Title>
      <Title level={4}>Hello, World!</Title>
      <Title level={5}>Hello, World!</Title>
      <Title level={6}>Hello, World!</Title>
      <Text>This is some paragraph text.</Text>
    </Page>
  );
}

export default App;

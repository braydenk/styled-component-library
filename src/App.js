import React from 'react';
import Page from './components/Page';
import { Title } from './components/Typography';
import styled from 'styled-components';

function App() {
  console.log(styled);
  return (
    <Page>
      <Title level={1}>Title text</Title>
    </Page>
  );
}

export default App;

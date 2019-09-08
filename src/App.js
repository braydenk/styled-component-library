import React from 'react';
import Page from './components/Page';
import Header from './components/Header';
import Link from './components/Link';

const navList = (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/">Blog</Link>
    </li>
    <li>
      <Link href="/">Projects</Link>
    </li>
    <li>
      <Link href="/">About</Link>
    </li>
  </ul>
);
function App() {
  return (
    <Page>
      <Header titleText="Demo Text" navList={navList} />
    </Page>
  );
}

export default App;

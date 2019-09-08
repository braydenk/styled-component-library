import React from 'react';
import Page from './components/Page';
import Card from './components/Card';
import Button from './components/Button';

// const navList = (
//   <ul>
//     <li>
//       <Link href="/">Home</Link>
//     </li>
//     <li>
//       <Link href="/">Blog</Link>
//     </li>
//     <li>
//       <Link href="/">Projects</Link>
//     </li>
//     <li>
//       <Link href="/">About</Link>
//     </li>
//   </ul>
// );
function App() {
  return (
    <Page>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          marginTop: '200px'
        }}
      >
        <Button primary>Bleep</Button>
      </div>
    </Page>
  );
}

export default App;

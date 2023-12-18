// @flow

import './root.css';
import Header from './Header.react';
import React from 'react';
import Definition from './Definition.react';

function App(): React$Node {
  return (
    <div className="App">
      <Header />
      <Definition />
    </div>
  );
}

export default App;

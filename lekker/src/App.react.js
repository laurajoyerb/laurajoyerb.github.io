// @flow

import Header from './Header.react';
import React from 'react';
import Definition from './Definition.react';
import './colorConstants.css';
import { css } from '@emotion/css';
import Menu from './Menu.react';

export default function App(): React$Node {
  return (
    <div className={styles.root}>
      <Header />
      <Definition />
      <Menu />
    </div>
  );
}

// Styles

const styles = {
  root: css`
    text-align: center;
    background-color: var(--beige);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: var(--text);
  `,
};

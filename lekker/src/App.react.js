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
      <img
        className={styles.flower1}
        src="./images/flowers1.png"
        alt="lekker cabinet logo"
      />
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
  flower1: css`
    position: absolute;
    max-height: 30%;
    max-width: 50%;
    top: -5%;
    opacity: 65%;
    left: -2%;
  `,
};

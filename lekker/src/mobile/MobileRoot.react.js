// @flow

import Header from './Header.react';
import React from 'react';
import Definition from './Definition.react';
import './../colorConstants.css';
import { css } from '@emotion/css';
import Menu from './Menu.react';

export default function MobileRoot(): React$Node {
  return (
    <div className={styles.root}>
      <img
        className={styles.flower1}
        src="./images/flowers1.png"
        alt="lekker cabinet logo"
      />
      <img
        className={styles.flower2}
        src="./images/flowers2.png"
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
    position: fixed;
    max-height: 30vh;
    max-width: 50vw;
    top: -5vh;
    opacity: 65%;
    left: -2vw;
  `,
  flower2: css`
    position: fixed;
    max-height: 30vh;
    max-width: 50vw;
    top: 80vh;
    opacity: 65%;
    right: -2vw;
  `,
};

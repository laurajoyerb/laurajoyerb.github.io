// @flow

import { css } from '@emotion/css';
import React from 'react';

export default function Header(): React$Node {
  return (
    <div className={styles.root}>
      <div className={styles.welcome}>Welcome to the</div>
      <img
        className={styles.image}
        src="./images/mobileheader.png"
        alt="lekker cabinet logo"
      />
    </div>
  );
}

// Styles

const styles = {
  root: css`
    padding-top: 75px;
    display: grid;
  `,
  welcome: css`
    justify-self: start;
    margin-bottom: -17px;
    margin-left: 10px;
    font-weight: 300;
    font-size: 16px;
  `,
  image: css`
    max-width: 80vw;
  `,
};

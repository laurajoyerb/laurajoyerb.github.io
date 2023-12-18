// @flow

import { css } from '@emotion/css';
import React from 'react';

export default function Header(): React$Node {
  return (
    <img
      className={styles.root}
      src="./images/header.png"
      alt="lekker cabinet logo"
    />
  );
}

// Styles

const styles = {
  root: css`
    padding-top: 10vh;
    max-width: 80%;
  `,
};

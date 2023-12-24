// @flow

import { css } from '@emotion/css';
import React from 'react';

export default function Header(): React$Node {
  return (
    <img
      className={styles.root}
      src="./images/mobileheader.png"
      alt="lekker cabinet logo"
    />
  );
}

// Styles

const styles = {
  root: css`
    padding-top: 75px;
    max-width: 80vw;
  `,
};

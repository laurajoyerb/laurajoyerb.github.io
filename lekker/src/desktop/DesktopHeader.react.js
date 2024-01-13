// @flow

import { css } from '@emotion/css';
import React from 'react';

export default function DesktopHeader(): React$Node {
  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src="./images/desktopheader.png"
        alt="lekker cabinet logo"
      />
    </div>
  );
}

// Styles

const styles = {
  root: css`
    padding-top: 50px;
    display: grid;
  `,
  image: css`
    max-width: 95vw;
    max-height: 20vh;
  `,
};

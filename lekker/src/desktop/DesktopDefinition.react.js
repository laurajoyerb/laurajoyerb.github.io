// @flow

import { css } from '@emotion/css';
import React from 'react';

export default function Definition(): React$Node {
  return (
    <div className={styles.root}>
      <div className={styles.pronunciation}>
        Lekker
        <br />/ (ˈlɛkə) /
      </div>
      <div className={styles.divider} />
      <div className={styles.text}>
        Afrikaans, from Dutch, literally ‘delicious’. <br />
        Southern African slang. pleasing or enjoyable. tasty. (informal)
        slightly intoxicated.
      </div>
    </div>
  );
}

// Styles

const styles = {
  root: css`
    display: flex;
    font-size: 13px;
    padding: 15px;
    position: fixed;
    bottom: 2px;
  `,
  pronunciation: css`
    padding-right: 10px;
  `,
  text: css`
    text-align: left;
    padding-left: 10px;
  `,
  divider: css`
    width: 1px;
    height: 2.5em;
    background-color: var(--purple);
  `,
};

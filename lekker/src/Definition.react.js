// @flow

import { css } from '@emotion/css';
import React from 'react';

export default function Definition(): React$Node {
  return (
    <div className={styles.root}>
      <div>
        Lekker
        <br />/ (ˈlɛkə) /
      </div>
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
    display: grid;
    grid-template-columns: 20% auto;
    align-items: center;
    font-size: 11px;
    padding: 15px;
  `,
  text: css`
    border-left: 1px solid var(--purple);
    text-align: left;
    padding-left: 10px;
  `,
};

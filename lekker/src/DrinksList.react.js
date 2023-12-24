// @flow

import React from 'react';
import type { Cocktail } from './Types';
import { css } from '@emotion/css';

type Props = $ReadOnly<{
  drinks: $ReadOnlyArray<Cocktail>,
}>;

export default function DrinksList({ drinks }: Props): React$Node {
  return (
    <div className={styles.root}>
      {drinks.map((drink) => (
        <div className={styles.drink} key={drink.name}>
          <div className={styles.title}>{drink.name.toUpperCase()}</div>
          <div className={styles.ingredients}>
            {drink.ingredients.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
}

// Styles

const styles = {
  root: css`
    padding: 16px 10px;
    gap: 14px;
    display: flex;
    flex-direction: column;
  `,
  drink: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  title: css`
    color: var(--dark-purple);
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.1em;
  `,
  ingredients: css`
    font-size: 14px;
  `,
};

// @flow

import React from 'react';
import type { Cocktail } from './../Types';
import getSections from './../utils/getSections';
import { css } from '@emotion/css';

type Props = $ReadOnly<{
  drinks: $ReadOnlyArray<Cocktail>,
  tab: string,
}>;

export default function DrinksList({ drinks, tab }: Props): React$Node {
  const sections = getSections(drinks, tab);

  return (
    <div className={styles.root}>
      {sections.map(({ label, drinks }) => {
        return (
          <div className={styles.section} key={label}>
            {label != null && (
              <div className={styles.sectionHeader}>
                <div className={styles.sectionLabel}>
                  {label?.toUpperCase()}
                </div>
                <div className={styles.horizLine} />
              </div>
            )}
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
      })}
    </div>
  );
}

// Styles

const styles = {
  root: css`
    padding: 16px 10px;
    gap: 22px;
    display: flex;
    flex-direction: column;
  `,
  section: css`
    display: flex;
    gap: 14px;
    flex-direction: column;
    padding-bottom: 12px;
    min-width: 100%;
  `,
  sectionHeader: css`
    text-align: start;
    padding: 0px 14px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
  `,
  sectionLabel: css`
    min-width: fit-content;
  `,
  horizLine: css`
    border: 1px solid var(--light-purple);
    width: 100%;
    height: 0px;
    margin: 8px;
  `,
  drink: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  title: css`
    color: var(--dark-purple);
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.1em;
  `,
  ingredients: css`
    font-size: 14px;
  `,
};

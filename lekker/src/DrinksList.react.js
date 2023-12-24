// @flow

import React from 'react';
import type { Cocktail } from './Types';
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
          <div className={styles.section}>
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

// Helpers

type Section = $ReadOnly<{
  label: ?string,
  drinks: $ReadOnlyArray<Cocktail>,
}>;

function getSections(
  drinks: $ReadOnlyArray<Cocktail>,
  tab: string,
): $ReadOnlyArray<Section> {
  switch (tab) {
    case 'Signature':
    case 'Non-Alcoholic':
    default:
      return [{ label: null, drinks: drinks }];
    case 'Others': {
      return [
        {
          label: 'Whiskey',
          drinks: drinks.filter((drink) =>
            drink.ingredients.includes('whiskey'),
          ),
        },
        {
          label: 'Gin',
          drinks: drinks.filter((drink) => drink.ingredients.includes('gin')),
        },
        {
          label: 'Vodka',
          drinks: drinks.filter((drink) => drink.ingredients.includes('vodka')),
        },
        {
          label: 'Tequila',
          drinks: drinks.filter((drink) =>
            drink.ingredients.includes('tequila'),
          ),
        },
        {
          label: 'Rum',
          drinks: drinks.filter((drink) => drink.ingredients.includes('rum')),
        },
        {
          label: 'Wild cards',
          drinks: drinks.filter(
            (drink) =>
              !drink.ingredients.includes('whiskey') &&
              !drink.ingredients.includes('gin') &&
              !drink.ingredients.includes('vodka') &&
              !drink.ingredients.includes('tequila') &&
              !drink.ingredients.includes('rum'),
          ),
        },
      ];
    }
  }
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
  `,
  sectionHeader: css`
    text-align: start;
    padding: 0px 12px;
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

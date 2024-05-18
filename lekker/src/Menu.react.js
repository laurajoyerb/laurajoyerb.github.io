// @flow

import React from 'react';
import { cocktails } from './Cocktails';
import type { Cocktail } from './Types';
import DrinksList from './mobile/DrinksList.react';
import { default as DesktopDrinksList } from './desktop/DesktopDrinksList.react';
import { Tab, tabClasses } from '@mui/base/Tab';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { css } from '@emotion/css';

type MenuProps = $ReadOnly<{
  isDesktop?: boolean,
}>;

export default function Menu({ isDesktop = false }: MenuProps): React$Node {
  const [tab, setTab] = React.useState('Signature');

  const filteredDrinks = useFilteredDrinks(tab);

  return (
    <Tabs
      className={styles.root}
      defaultValue={'Signature'}
      onChange={(_, tab) => setTab(tab)}>
      <TabsList className={styles.tabsList}>
        {['Signature', 'Others', 'Non-Alcoholic'].map(
          (item, index, categories) => {
            return (
              <div className={styles.tabOuter} key={item}>
                <Tab className={styles.tab} value={item}>
                  {item}
                </Tab>
                {index + 1 === categories.length ? null : (
                  <div className={styles.divider} />
                )}
              </div>
            );
          },
        )}
      </TabsList>
      {isDesktop ? (
        <DesktopDrinksList drinks={filteredDrinks} tab={tab} />
      ) : (
        <DrinksList drinks={filteredDrinks} tab={tab} />
      )}
    </Tabs>
  );
}

// Helpers

function useFilteredDrinks(tab: string): $ReadOnlyArray<Cocktail> {
  switch (tab) {
    case 'Signature':
      return cocktails.filter(
        (cocktail: Cocktail) => cocktail.signature === true,
      );
    case 'Non-Alcoholic':
      return cocktails.filter(
        (cocktail: Cocktail) => cocktail.nonalcoholic === true,
      );
    case 'Others':
    default:
      return cocktails
        .filter((cocktail: Cocktail) => cocktail.nonalcoholic === false)
        .sort((a, b) =>
          a.strength > b.strength ? 1 : a.strength === b.strength ? 0 : -1,
        );
  }
}

// Style

const styles = {
  root: css`
    min-width: 100%;
  `,
  tabsList: css`
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    padding: 0px 10px;
  `,
  tab: css`
    background-color: transparent;
    color: grey;
    font-size: 18px;
    width: 100%;
    padding: 10px 8px;
    margin: 6px;
    border-radius: 7px;
    border: none;
    display: flex;
    justify-content: center;

    &.${tabClasses.selected} {
      color: black;
    }
  `,
  tabOuter: css`
    display: flex;
  `,
  divider: css`
    background-color: var(--light-purple);
    width: 0.1em;
    height: 1em;
    display: flex;
    align-self: center;
  `,
};

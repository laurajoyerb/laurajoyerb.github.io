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
    min-width: fit-content;
  `,
  tabsList: css`
    border-radius: 36px;
    margin: 10px auto;
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    background-color: var(--tab-background);
  `,
  tab: css`
    background-color: transparent;
    color: grey;
    font-size: 18px;
    width: fit-content;
    padding: 10px 16px;
    border-radius: 36px;
    border: none;
    display: flex;
    justify-content: center;

    &.${tabClasses.selected} {
      color: var(--dark-purple);
      background-color: var(--tab-selected);
    }
  `,
  tabOuter: css`
    display: flex;
  `,
};

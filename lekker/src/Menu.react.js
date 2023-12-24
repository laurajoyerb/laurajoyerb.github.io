// @flow

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { cocktails } from './Cocktails';
import type { Cocktail } from './Types';
import DrinksList from './DrinksList.react';

export default function Menu(): React$Node {
  const [tab, setTab] = React.useState('Signature');

  const filteredDrinks = useFilteredDrinks(tab);

  return (
    <>
      <Tabs
        value={tab}
        onChange={(_, tab) => setTab(tab)}
        textColor="secondary"
        indicatorColor="secondary">
        {['Signature', 'Others', 'Non-Alcoholic'].map((item) => {
          return <Tab value={item} label={item} />;
        })}
      </Tabs>
      <DrinksList drinks={filteredDrinks} tab={tab} />
    </>
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

import React from 'react';
import { cocktails } from './Cocktails.ts';
import DrinksList from './mobile/DrinksList.tsx';
import { default as DesktopDrinksList } from './desktop/DesktopDrinksList.tsx';
import { Tab, tabClasses } from '@mui/base/Tab';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { css } from '@emotion/css';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import AddIcon from '@mui/icons-material/Add';
import { Cocktail } from './Types';
import { availableIngredients } from './AvailableIngredients.ts';

export default function Menu({ isDesktop = false }) {
  const [tab, setTab] = React.useState<string>('Signature');
  // const [selectedIngredients, setSelectedIngredients] = React.useState<Ingredient[]>([]);
  // const [unselectedIngredients, setUnselectedIngredients] = React.useState<Ingredient[]>([
  //   'whiskey',
  //   'gin',
  //   'rum',
  //   'tequila',
  //   'vodka',
  // ]);

  // const handleAddIngredient = (ingredient: Ingredient) => {
  //   setSelectedIngredients([...selectedIngredients, ingredient]);
  //   setUnselectedIngredients(
  //     unselectedIngredients.filter((i) => i !== ingredient),
  //   );
  // };

  // const handleRemoveIngredient = (ingredient: Ingredient) => {
  //   setSelectedIngredients(selectedIngredients.filter((i) => i !== ingredient));
  //   setUnselectedIngredients([...unselectedIngredients, ingredient]);
  // };

  const filteredDrinks = getFilteredDrinks(tab ?? 'Signature');

  return (
    <Tabs
      className={styles.root}
      defaultValue={'Signature'}
      onChange={(_, tab) => setTab(typeof tab === 'string' ? tab : 'Signature')}>
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
      {/* {tab === 'Others' && (
        <Stack className={styles.ingredients} direction="row" spacing={1}>
          {selectedIngredients.map((ingredient) => {
            return (
              <Chip
                key={ingredient}
                label={ingredient}
                onDelete={() => handleRemoveIngredient(ingredient)}
              />
            );
          })}
          {unselectedIngredients.map((ingredient) => {
            return (
              <Chip
                key={ingredient}
                label={ingredient}
                icon={<AddIcon />}
                onClick={() => handleAddIngredient(ingredient)}
              />
            );
          })}
        </Stack>
      )} */}
      {isDesktop ? (
        <DesktopDrinksList drinks={filteredDrinks} tab={tab} />
      ) : (
        <DrinksList drinks={filteredDrinks} tab={tab} />
      )}
    </Tabs>
  );
}

// Helpers

function getFilteredDrinks(tab: string): ReadonlyArray<Cocktail> {
  const availableCocktails = cocktails.filter(cocktail =>
    cocktail.ingredients.every(ingredient =>
      availableIngredients.includes(ingredient),
    ),
  );

  switch (tab) {
    case 'Signature':
      return availableCocktails.filter(
        (cocktail: Cocktail) => cocktail.signature === true,
      );
    case 'Non-Alcoholic':
      return availableCocktails.filter(
        (cocktail: Cocktail) => cocktail.nonalcoholic === true,
      ).map(cocktail => ({ ...cocktail, ingredients: [] }));
    case 'Others':
    default:
      return availableCocktails
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
    position: sticky;
    top: 12px;
    border-radius: 36px;
    margin: 10px auto;
    padding: 6px 6px;
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
    padding: 6px 16px;
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
  ingredients: css`
    max-width: 85%;
    margin: 0 auto;
    overflow-x: scroll;
  `,
};

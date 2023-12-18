// @flow

export type Ingredient =
  | 'lime juice'
  | 'simple syrup'
  | 'whiskey'
  | 'lemon juice'
  | 'rum'
  | 'cola'
  | 'grenadine';

export type Cocktail = {
  ingredients: $ReadOnlyArray<Ingredient>,
  name: string,
  strength: number,
  signature: boolean,
  nonalcoholic: boolean,
};

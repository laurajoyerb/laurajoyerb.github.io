// @flow

export type Ingredient =
  | 'gin'
  | 'sweet vermouth'
  | 'campari'
  | 'lime'
  | 'grenadine'
  | 'tequila'
  | 'vodka'
  | 'rum'
  | 'simple syrup'
  | 'lemon'
  | 'cola'
  | 'whiskey'
  | 'angostura bitters'
  | 'champagne'
  | 'elderflower liqueur'
  | 'club soda'
  | 'Cointreau'
  | 'dry vermouth'
  | 'Irish cream liqueur'
  | 'coffee liqueur'
  | 'lillet blanc'
  | 'St. Germain'
  | 'sugar';

export type Cocktail = {
  ingredients: $ReadOnlyArray<Ingredient>,
  name: string,
  strength: number,
  signature: boolean,
  nonalcoholic: boolean,
};

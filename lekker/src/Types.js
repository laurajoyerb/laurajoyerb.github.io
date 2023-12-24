// @flow

export type Ingredient =
  | 'gin'
  | 'sweet vermouth'
  | 'campari'
  | 'gold rum'
  | 'lime juice'
  | 'grenadine'
  | 'tequila'
  | 'vodka'
  | 'rum'
  | 'simple syrup'
  | 'lemon juice'
  | 'cola'
  | 'whiskey'
  | 'angostura bitters'
  | 'champagne'
  | 'elderflower liqueur'
  | 'club soda'
  | 'Cointreau'
  | 'dry vermouth'
  | 'white rum'
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

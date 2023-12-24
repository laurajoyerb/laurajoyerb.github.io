// @flow

export type Ingredient =
  | 'Gin'
  | 'sweet vermouth'
  | 'campari'
  | 'Gold rum'
  | 'lime juice'
  | 'grenadine'
  | 'tequila'
  | 'vodka'
  | 'rum'
  | 'cointreau'
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
  | 'White rum'
  | 'Irish cream liqueur'
  | 'coffee liqueur'
  | 'more dry vermouth'
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

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
  | 'bitters'
  | 'orange bitters'
  | 'chambord'
  | 'champagne'
  | 'elderflower liqueur'
  | 'club soda'
  | 'Cointreau'
  | 'dry vermouth'
  | 'Irish cream liqueur'
  | 'white wine'
  | 'red wine'
  | 'milk'
  | 'water'
  | 'coffee liqueur'
  | 'lillet blanc'
  | 'Lillet Blanc'
  | 'St. Germain'
  | 'maraschino'
  | 'amarula'
  | 'aperol'
  | 'sugar';

type Recipe = { [Ingredient]: number };

export type Cocktail = {
  ingredients: $ReadOnlyArray<Ingredient>,
  name: string,
  strength: number,
  signature: boolean,
  nonalcoholic: boolean,
  recipe?: Recipe,
  notes?: string,
};

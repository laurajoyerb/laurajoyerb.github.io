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
  | 'pomeranate liqueur'
  | 'ginger liqueur'
  | 'creme de violette'
  | 'creme de menthe'
  | 'amaretto'
  | 'orgeat'
  | 'sugar';

type Recipe = {
  [K in Ingredient]?: number;
};

export type Cocktail = {
  ingredients: ReadonlyArray<Ingredient>;
  name: string;
  strength: number;
  signature: boolean;
  nonalcoholic: boolean;
  recipe?: Recipe;
  notes?: string;
};

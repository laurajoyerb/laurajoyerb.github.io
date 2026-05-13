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
  | 'rose wine'
  | 'milk'
  | 'water'
  | 'coffee liqueur'
  | 'lillet blanc'
  | 'Lillet Blanc'
  | 'St. Germain'
  | 'maraschino'
  | 'amarula'
  | 'aperol'
  | 'pomegranate liqueur'
  | 'ginger liqueur'
  | 'creme de violette'
  | 'vanilla vodka'
  | 'creme de menthe'
  | 'amaretto'
  | 'orgeat'
  | 'coffee'
  | 'tang'
  | 'fever-tree elderflower tonic'
  | 'fever-tree tonic'
  | 'fever-tree blood orange soda'
  | 'fever-tree lemonade'
  | 'tea'
  | 'cocoa'
  | 'izze'
  | 'olipop'
  | 'poppi'
  | 'athletic'
  | 'humm'
  | 'egg white'
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

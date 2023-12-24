// @flow

import type { Cocktail } from './Types';

export const cocktails: $ReadOnlyArray<Cocktail> = [
  {
    name: 'Coffee',
    ingredients: [],
    strength: 0,
    signature: false,
    nonalcoholic: true,
  },
  {
    name: 'Negroni',
    ingredients: ['Gin', 'sweet vermouth', 'campari'],
    strength: 3,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Queen Elizabeth',
    ingredients: ['Gold rum', 'lime juice', 'grenadine'],
    strength: 3,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Long Island Iced Tea',
    ingredients: [
      'Gin',
      'tequila',
      'vodka',
      'rum',
      'cointreau',
      'simple syrup',
      'lemon juice',
      'cola',
    ],
    strength: 3,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Bacardi Cocktail - Ritz version',
    ingredients: [
      'rum',
      'dry vermouth',
      'lemon juice',
      'simple syrup',
      'grenadine',
    ],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Ward Eight',
    ingredients: ['whiskey', 'simple syrup', 'lemon juice', 'grenadine'],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Mark Twain Cocktail',
    ingredients: [
      'whiskey',
      'lemon juice',
      'simple syrup',
      'angostura bitters',
    ],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Whiskey sour',
    ingredients: ['whiskey', 'lemon juice', 'simple syrup'],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'The LJ 75',
    ingredients: ['Gin', 'champagne', 'lemon juice', 'elderflower liqueur'],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Gin Daisy',
    ingredients: [
      'Gin',
      'lemon juice',
      'grenadine',
      'simple syrup',
      'club soda',
    ],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Boulevard',
    ingredients: ['whiskey', 'Cointreau', 'dry vermouth'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  // ... (similar objects for the remaining cocktails)
];

const additionalCocktailsData = [
  {
    name: 'Rob Roy',
    ingredients: ['Whiskey', 'sweet vermouth', 'angostura bitters'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Old Pal',
    ingredients: ['Whiskey', 'dry vermouth', 'campari'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Boulevardier',
    ingredients: ['Whiskey', 'Sweet vermouth', 'campari'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Manhattan',
    ingredients: ['Whiskey', 'sweet vermouth', 'angostura bitters'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'El Presidente',
    ingredients: ['White rum', 'dry vermouth', 'cointreau', 'grenadine'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Bacardi Cocktail',
    ingredients: ['Rum', 'lime juice', 'grenadine'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Kamikaze',
    ingredients: ['Vodka', 'cointreau', 'lime juice'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Black Russian',
    ingredients: ['Vodka', 'coffee liqueur'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: "Devil's Torch",
    ingredients: ['Vodka', 'dry vermouth', 'grenadine'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Mudslide Shot',
    ingredients: ['Vodka', 'Irish cream liqueur', 'coffee liqueur'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
];

console.log(additionalCocktailsData);

const additionalCocktailsData2 = [
  {
    name: 'Gin and It',
    ingredients: ['Gin', 'sweet vermouth', 'angostura bitters'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'The Vampire',
    ingredients: ['Gin', 'dry vermouth', 'lime juice'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'White Lady',
    ingredients: ['Gin', 'cointreau', 'lemon juice'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Gin Sour',
    ingredients: ['Gin', 'lemon juice', 'simple syrup'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Royal Romance',
    ingredients: ['Gin', 'cointreau', 'grenadine'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Upside-down martini',
    ingredients: ['Dry vermouth', 'gin'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: "Devil's Own",
    ingredients: ['Gin', 'dry vermouth', 'cointreau', 'angostura bitters'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Gibson',
    ingredients: ['Gin', 'dry vermouth'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Margarita',
    ingredients: ['Tequila', 'cointreau', 'lime juice'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Mexican Firing squad',
    ingredients: ['Tequila', 'lime juice', 'grenadine', 'angostura bitters'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
];

console.log(additionalCocktailsData2);

const additionalCocktailsData3 = [
  {
    name: 'B52',
    ingredients: ['Cointreau', 'coffee liqueur', 'Irish cream liqueur'],
    strength: 3,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Gimlet',
    ingredients: ['Gin', 'lime juice', 'simple syrup'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Fitzgerald',
    ingredients: ['Gin', 'lemon juice', 'simple syrup', 'angostura bitters'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Gin Rickey',
    ingredients: ['Gin', 'lime juice', 'simple syrup', 'club soda'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Bitter French',
    ingredients: ['Gin', 'campari', 'lemon juice', 'simple syrup', 'champagne'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'French 75',
    ingredients: ['Gin', 'champagne', 'lemon juice', 'simple syrup'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'American Flyer',
    ingredients: ['Champagne', 'white rum', 'lime juice', 'sugar'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Daiquiri',
    ingredients: ['White rum', 'lime juice', 'simple syrup'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Tipperary',
    ingredients: ['Whiskey', 'sweet vermouth'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Americano',
    ingredients: ['Campari', 'sweet vermouth', 'club soda'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
];

console.log(additionalCocktailsData3);

const additionalCocktailsData4 = [
  {
    name: 'Addington Cocktail',
    ingredients: ['Dry Vermouth', 'sweet vermouth', 'club soda'],
    strength: 2,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Cuba Libre',
    ingredients: ['White rum', 'lime juice', 'cola'],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'The St. Germain Cocktail',
    ingredients: ['St. Germain', 'champagne', 'club soda'],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Trinidad',
    ingredients: ['Rum', 'cola', 'angostura bitters'],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Rome with a View',
    ingredients: [
      'Campari',
      'dry vermouth',
      'club soda',
      'lime juice',
      'simple syrup',
    ],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Bitter Intentions',
    ingredients: [
      'Campari',
      'dry vermouth',
      'club soda',
      'lemon juice',
      'simple syrup',
    ],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Gin Fizz',
    ingredients: ['Gin', 'lemon juice', 'club soda', 'simple syrup'],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Tom Collins',
    ingredients: [
      'Gin',
      'simple syrup',
      'lemon juice',
      'club soda',
      'angostura bitters',
    ],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Lime Rickey',
    ingredients: [
      'Lime juice',
      'simple syrup',
      'angostura bitters',
      'club soda',
    ],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Pink Gin',
    ingredients: ['Gin', 'angostura bitters'],
    strength: 4,
    signature: false,
    nonalcoholic: false,
  },
];

console.log(additionalCocktailsData4);

const additionalCocktailsData5 = [
  {
    name: 'Dry Martini',
    ingredients: ['Gin', 'dry vermouth'],
    strength: 4,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Extra-dry Martini',
    ingredients: ['Gin', 'more dry vermouth'],
    strength: 4,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'West Indian Cocktail',
    ingredients: ['Gin', 'angostura bitters', 'lemon juice', 'sugar'],
    strength: 4,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Vesper',
    ingredients: ['Gin', 'vodka', 'lillet blanc'],
    strength: 4,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Vodkatini',
    ingredients: ['Vodka', 'dry vermouth'],
    strength: 4,
    signature: false,
    nonalcoholic: false,
  },
];

console.log(additionalCocktailsData5);

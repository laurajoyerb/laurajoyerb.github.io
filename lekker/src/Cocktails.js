// @flow

import type { Cocktail } from './Types';

export const cocktails: $ReadOnlyArray<Cocktail> = [
  {
    name: 'Ward Eight',
    ingredients: ['whiskey', 'lemon juice', 'simple syrup', 'grenadine'],
    strength: 2,
    signature: true,
    nonalcoholic: false,
  },
  {
    name: 'Cuba Libre',
    ingredients: ['rum', 'lime juice', 'cola'],
    strength: 1,
    signature: false,
    nonalcoholic: false,
  },
  {
    name: 'Coffee',
    ingredients: [],
    strength: 0,
    signature: false,
    nonalcoholic: true,
  },
];

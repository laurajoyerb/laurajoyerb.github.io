// @flow

import React from 'react';
import type { Cocktail } from './Types';

type Props = $ReadOnly<{
  drinks: $ReadOnlyArray<Cocktail>,
}>;

export default function DrinksList({ drinks }: Props): React$Node {
  return (
    <ul>
      {drinks.map((drink) => (
        <li key={drink.name}>{drink.name}</li>
      ))}
    </ul>
  );
}

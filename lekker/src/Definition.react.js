// @flow

import './root.css';

import React from 'react';

export default function Definition(): React$Node {
  return (
    <div className="definitionRoot">
      <div>
        Lekker
        <br />/ (ˈlɛkə) /
      </div>
      <div className="definitionText">
        Afrikaans, from Dutch, literally ‘delicious’. <br />
        Southern African slang. pleasing or enjoyable. tasty. (informal)
        slightly intoxicated.
      </div>
    </div>
  );
}

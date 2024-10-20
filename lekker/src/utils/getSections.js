type Section = $ReadOnly<{
    label: ?string,
    drinks: $ReadOnlyArray<Cocktail>,
  }>;

 export default function getSections(
    drinks: $ReadOnlyArray<Cocktail>,
    tab: string,
  ): $ReadOnlyArray<Section> {
    switch (tab) {
      case 'Signature':
      default:
        return [{ label: null, drinks: drinks }];
      case 'Non-Alcoholic':
        const hot = drinks.filter((drink) =>
          ['Coffee', 'Tea', 'Hot Tang', 'Hot Cocoa'].includes(drink.name),
        );
        const mocktails = drinks.filter((drink) => {
          return (
            drink.name.includes('Gin') ||
            drink.name.includes('Spritz') ||
            drink.name.includes('Wine')
          );
        });
        const theRest = drinks.filter(
          (drink) => !hot.includes(drink) && !mocktails.includes(drink),
        );

        return [
          {
            label: 'Mocktails & Wine',
            drinks: mocktails,
          },
          {
            label: 'Sodas',
            drinks: theRest,
          },
          {
            label: 'Hot Beverages',
            drinks: hot,
          },
        ];

      case 'Others': {
        return [
          {
            label: 'Whiskey',
            drinks: drinks.filter((drink) =>
              drink.ingredients.includes('whiskey'),
            ),
          },
          {
            label: 'Gin',
            drinks: drinks.filter((drink) => drink.ingredients.includes('gin')),
          },
          {
            label: 'Vodka',
            drinks: drinks.filter((drink) => drink.ingredients.includes('vodka')),
          },
          {
            label: 'Tequila',
            drinks: drinks.filter((drink) =>
              drink.ingredients.includes('tequila'),
            ),
          },
          {
            label: 'Rum',
            drinks: drinks.filter((drink) => drink.ingredients.includes('rum')),
          },
          {
            label: 'Wild cards',
            drinks: drinks.filter(
              (drink) =>
                !drink.ingredients.includes('whiskey') &&
                !drink.ingredients.includes('gin') &&
                !drink.ingredients.includes('vodka') &&
                !drink.ingredients.includes('tequila') &&
                !drink.ingredients.includes('rum'),
            ),
          },
        ];
      }
    }
  }

//Formats a provided number into a currency format 
function currencyFormat(num) {
  return '$' + num.toFixed(2);
}

function handleCategoryPrice(item) {
  const burgerLarge = 6;
  const sideLarge = 3;
  const drinkLarge = 2;

  var currentCost = 0;

  if (item.category) {
    if (item.category === 'Burger') {
      currentCost = burgerLarge;
    }
    else if (item.category === 'Sides') {
      currentCost = sideLarge;
    }
    else if (item.category === 'Drink') {
      currentCost = drinkLarge;
    }
  }
  return currentCost;
}

export { currencyFormat, handleCategoryPrice };
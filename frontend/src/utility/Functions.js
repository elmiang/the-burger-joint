import CryptoJS from 'crypto-js';

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

const encryptData = (data, salt) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();
}

const decryptData = (ciphertext, salt) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    console.log(err);
    return null;
  }
}


export { currencyFormat, handleCategoryPrice, encryptData, decryptData };
//Formats a provided number into a currency format 
function currencyFormat(num) {
  return '$' + num.toFixed(2);
}

export default currencyFormat;
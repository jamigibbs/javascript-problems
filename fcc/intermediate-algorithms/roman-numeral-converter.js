function convertToRoman(num) {
  var result = '';

  var decimal = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for(var i = 0; i < decimal.length; i++){
    // Check if our number is divisible by each decimal
    while(num % decimal[i] < num){
      // If divisble, add the numeral to our string
      result += roman[i];
      // And subtract that amount from the number to check for
      // the next roman numeral
      num -= decimal[i]
    }
  }

  return result;
}

console.log(convertToRoman(90));
// XL
console.log(convertToRoman(1));
// I
console.log(convertToRoman(4));
// IV
console.log(convertToRoman(5));
// V
console.log(convertToRoman(16));
// XVI

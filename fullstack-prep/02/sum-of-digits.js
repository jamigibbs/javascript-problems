function sumOfDigits(digit){
  if(!digit){ return 0 };
  
  var total = 0;

  // to string
  digit = digit.toString();

  // split string to array
  var array = digit.split('');

  // add values
  for(var i = 0; i < array.length; i++){
    total += parseInt(array[i]);
  }
  return total;
}

//EXAMPLE TESTS

console.log(sumOfDigits(414));
//OUTPUT: 9

console.log(sumOfDigits(2913));
//OUTPUT: 15

function sumOfDigits(digit){
  digit = digit || 0;

  var arr = digit.toString().split('');
  
  return arr.reduce(function(acc, val){
    return acc += Number(val);
  }, 0)
}

//EXAMPLE TESTS

console.log(sumOfDigits(414));
//OUTPUT: 9

console.log(sumOfDigits(2913));
//OUTPUT: 15

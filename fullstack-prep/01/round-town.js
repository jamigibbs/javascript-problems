function sumMultiplyAndRound(num1, num2, num3){
  var total;
  
  total = Math.floor(num1 + num2);
  total = Math.ceil(total * num3);
  return total;
}


//EXAMPLE TESTS

console.log(sumMultiplyAndRound(2, 3.5, 6.2))
//OUTPUT: 31

function factorial(num){
  if(num === 0){
    return 1;
  }
  return num * factorial(num - 1);
}



//EXAMPLE TESTS

console.log(factorial(4));
//OUTPUT: 24

console.log(factorial(5));
//OUTPUT: 120

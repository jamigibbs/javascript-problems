function isPrime(number){
  for(var i = 2; i < number; i++){
    if(number % i === 0) { return false }
  }
  return true;
}

//EXAMPLE TESTS

console.log(isPrime(5));
//OUTPUT: true

console.log(isPrime(10));
//OUTPUT: false

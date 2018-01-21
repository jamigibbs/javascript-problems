function sumPrimes(num) {

  // Initilize array
  var range = [];

  // Create array for number range
  for(var i = 0; i <= num; i++){
    range.push(i);
  }

  // Function to check
  var isPrimeNumber = function(num) {
    for (var i = 2; i < num; i++) {
      // when num is divisible by i, it's not a prime number so return false
      if(num % i === 0) {
        return false;
      }
    }
    // otherwise it's prime. Also must be greater than 1.
    return num > 1;
  }

  // Check for prime and reduce to single value
  return range.reduce(function(acc, curr){
    if(isPrimeNumber(curr)){
      return acc + curr;
    } else {
      return acc;
    }
  })
}

console.log(sumPrimes(10))
// 17

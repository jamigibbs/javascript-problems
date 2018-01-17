function consecutiveOnes(n) {
  // Convert integer to binary (base-2)
  // and split into array separated by the '0's
  var binary = Number(Math.abs(n)).toString(2).split('0');

  // Sort array from largest to smallest
  binary.sort(function(a, b){
    return b > a;
  })

  // Return length of longest element;
  return binary[0].length;
}

console.log(consecutiveOnes(332));
// 2; because binary of 332 is 1101100

console.log(consecutiveOnes(5));
// 1; because binary of 5 is 101

console.log(consecutiveOnes(13));
// 2; because binary of 13 is 1101

console.log(consecutiveOnes(488));
// 4; because binary of 488 is 111101000

console.log(consecutiveOnes(-5));
// 1; because binary of -5 is 101

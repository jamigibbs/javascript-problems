function largestOfFour(arr) {
  var largest = [];

  for(var i = 0; i < arr.length; i++){
    // Find the largest value in the array
    var found = Math.max.apply(null, arr[i]);
    // Push that value into a new array
    largest.push(found);
  }

  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [5, 27, 39, 1001]

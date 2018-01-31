// V1
function minSum(arr) {

  var total = 0;

  // Sort array low to high
  var sorted = arr.sort(function(a, b){
    return a - b;
  });

  // Multiply lowest nums with highest nums
  for(var i = 0; i < arr.length / 2; i++){
    var product = sorted[i] * sorted[(arr.length - 1) - i]
    total += product;
  }

  return total;

}

// V2
function minSum2(arr) {

  return arr.sort(function(a, b){
    return a - b;
  }).reduce(function(acc, curr, index, array){
    return acc + (curr * array[array.length - 1 - index]) / 2;
  }, 0)

}

console.log('22 ->', minSum([5,4,2,3]));
console.log('342 ->', minSum([12,6,10,26,3,24]));
console.log('74 ->', minSum([9,2,8,7,5,4,0,6]));

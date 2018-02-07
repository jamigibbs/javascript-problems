function evenOdd(arr){
  var result = [ [], [] ]
  arr.forEach(function(val){
    return val % 2 == 0 ? result[0].push(val) : result[1].push(val);
  })
  return result;
}


//EXAMPLE TESTS
console.log(evenOdd([1, 2, 3, 4, 5, 6]));
// [[2, 4, 6], [1, 3, 5]]

console.log(evenOdd([12, 12, 33, 45, 59, 61]));
// [[12, 12], [33, 45, 59, 61]]

console.log(evenOdd([2, 4, 6, 8]));
// [[2, 4, 6, 8], []]

console.log(evenOdd([1,2,3,4,5,6]));
// OUTPUT: [ [2,4,6], [1,3,5] ]

console.log(evenOdd([1, 3, 5, 7, 9]));
// [[], [1, 3, 5, 7, 9]]

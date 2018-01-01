function evenOdd(arr){
  var evens = [],
      odds = [],
      final = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }

  final.push(evens,odds);
  return final;
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

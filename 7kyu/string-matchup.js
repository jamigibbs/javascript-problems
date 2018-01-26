// Given two arrays of strings, return the number of times each
// string of the second array appears in the first array.


function solve(a, b){
  var countArray = [];

  b.map(function(value, index){
    // Initialize value
    countArray[index] = 0;
    a.forEach(function(el){
      if(value == el){
        // Increment for each match
        countArray[index]++;
      }
    })
  })

  return countArray;
}

console.log('[0, 0, 1, 1, 1, 1] ->', solve(
[ 'defg','ef','defghij','bcdefg','fgh','fghijkl','fghij','cdefg','efghijk','cdefg' ],
[ 'abc', 'abc', 'fgh', 'fgh', 'bcdefg', 'defghij' ]))

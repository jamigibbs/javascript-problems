// Use the reduce method in combination with the concat method to
// “flatten” an array of arrays into a single array that has all
// the elements of the input arrays.

function flatten(arr){
  return arr.reduce(function(acc, curr){
    return acc.concat(curr)
  }, [])
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log('[1, 2, 3, 4, 5, 6] ->', flatten(arrays))

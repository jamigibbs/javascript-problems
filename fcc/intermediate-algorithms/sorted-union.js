function uniteUnique(arr) {
  /*
    All values present from all arrays should be included in their original order,
    but with no duplicates in the final array.
  */

  // Get all given arrays
  var args = Array.prototype.slice.call(arguments);
  // [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]

  return args
    // Combine all arrays into a single array
    .reduce(function(group, line, index){
      return group.concat(line)
    }, [])
    // Filter out any duplicates
    .filter(function(val, pos, self){
      return self.indexOf(val) == pos;
    })
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// [1, 3, 2, 5, 4]

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
// [1, 3, 2, [5], [4]]

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// [1, 2, 3, 5]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// [1, 2, 3, 5, 4, 6, 7, 8]

function sym(args) {

  // Get all arrays from the arguments provided
  // Account for new arguments being returned from recursion
  let arrays = arguments.length > 1 ? Array.prototype.slice.call(arguments) : arguments[0];

  // Create diff variable
  var diff = [];

  // Stop recursion when we only have one array left
  if(arrays.length <= 1 ){
    // Final filter for duplicates.
    return arrays[0].reduce( (acc, val) => {
      if( acc.indexOf(val) == -1 ){
        acc.push(val);
      }
      return acc;
    }, [])
  }

  // Compare first two arrays from arguments
  if(arrays.length > 1){

    // Combine the two arrays
    var newArr = arrays[0].concat(arrays[1]);

    // Filter out all matching digits and create new array of non-matching digits
    diff = newArr.filter( (item, pos) => {
      if (arrays[0].indexOf(item) === -1 || arrays[1].indexOf(item) === -1) {
        return item;
      }
    });

    // Remove the first two arrays from array of arguments
    arrays.splice(0, 2);

    // Add the newly formed diff array to the array of arguments
    arrays.unshift(diff);

    // Return the next group of array arguments to compare
    return sym(arrays)
  }

}

console.log('[3, 4, 5] ->', sym([1, 2, 3], [5, 2, 1, 4]))
console.log('[4, 1, 6] ->', sym([1, 2, 3], [5, 2, 1, 4], [1, 3, 5, 6]))
console.log('should contain only three elements. ->', sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

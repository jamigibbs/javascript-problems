function destroyer(arr) {

  // Put the numbers we want to match into an array
  // Also removes these values from the arguments
  var check = Array.prototype.slice.call(arguments, 1);

  // Return a new array that contains elements
  // that do not match our check array
  return arr.filter(function(value){
    // Only return values that do not exist
    // in the check array
    return check.indexOf(value) === -1;
  });

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]

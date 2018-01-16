function diffArray(arr1, arr2){
  // Combine arrays
  var array = arr1.concat(arr2);

  // If it's a unique value, the first index and
  // last index number will be the same.
  return array.filter(function(val){
    return array.indexOf(val) === array.lastIndexOf(val);
  });

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// [4]

function myLastIndexOf(arr, searchValue, fromIndex){
  var index  = fromIndex || 0,
      length = (arr.length - index) - 1;

  for(var i = length; i > 0; i-- ){
    if(searchValue === arr[i]){
      return i;
    }
  }

  return -1;
}

// Returns the last index at which a given element can be found in the array,
// or -1 if it is not present.

//EXAMPLE TESTS

console.log(myLastIndexOf([7, 1, 8, 9, 1, 3, 4], 1, 3) );
// OUTPUT: 1

console.log(myLastIndexOf([1,2,1], 1, 1));
// OUTPUT: 0

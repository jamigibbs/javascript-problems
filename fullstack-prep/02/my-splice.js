function mySplice(arr, start, deleteCount) {
  var deleted = [];
  var keep = [];

  // Account for optional delete
  if(deleteCount === undefined) {
    deleteCount = arr.length - start;
  }

  // Move items before delete start position into new array
  for(var i = 0; i < start; i++) {
    keep.push(arr.shift());
  }

  // Move deleted items into new array
  for(var x = 0; x < deleteCount; x++) {
    deleted.push(arr.shift());
  }

  // Add new items into original array (back to front)
  for(var y = arguments.length - 1; y > 2; y--) {
    arr.unshift(arguments[y]);
  }

  // Add original kept items in front of new items of original array
  for(var j = 0, length = keep.length; j < length; j++) {
    arr.unshift(keep.pop());
  }

  return deleted;
}


//EXAMPLE TESTS

var arr = [1, 2, 3, 4];
var array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(mySplice(arr, 0, 2));
// [1, 2]

console.log(arr);
// [3, 4]

console.log(mySplice(array, 2, 4));
// [3, 4, 5, 6]

console.log(array);
// [1, 2, 7, 8]

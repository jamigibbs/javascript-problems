function chunkArrayInGroups(arr, size) {
  var chunked = [];

  // Get the number of arrays we're creating
  var length = arr.length / size;

  // Splice out array sections and push each into new array
  for(var i = 0; i < length; i++){
    chunked.push( arr.splice(0, size) );
  }

  return chunked;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
// [[0, 1, 2, 3], [4, 5]]

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
// [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

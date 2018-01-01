function mySlice(arr, begin, end){
  var slice = [];

  // Account for zero begin & end args; return empty slice
  if(begin === 0 && end == 0){
    return slice;
  }

  // Account for no begin or end args, return given array
  if(!begin && !end){
    return arr;
  }

  // Account for undefined end argument
  end = end ? end : arr.length;

  // Start argument: Account for undefined & negative value
  if(!begin){
    begin = 0;
  } else if (begin < 0){
    begin = arr.length - Math.abs(begin);
  }

  // End argument: Account for negative value
  if(end < 0){
    end = arr.length - Math.abs(end);
  }

  // Front to back
  if(begin >= 0){
    for(var i = begin; i < end; i++){
      slice.push(arr[i]);
    }
  // Back to Front; negative start
  } else if(begin < 0) {
    for(var i = arr.length; i > end; i--){
      slice.push(arr[i]);
    }
  }

  return slice;
}

//EXAMPLE TESTS

console.log(mySlice([1, 2, 3, 4], 0, -3));
// [1]
console.log(mySlice([1, 2, 3, 4], 0, -2));
// [1, 2]
console.log(mySlice([1, 2, 3, 4], 0, -1));
// [1, 2, 3]

console.log(mySlice([1, 2, 3, 4], 0, 3));
// [1, 2, 3]
console.log(mySlice([1, 2, 3, 4], 0, 2));
// [1, 2]
console.log(mySlice([1, 2, 3, 4], 0, 1));
// [1]
console.log(mySlice([1, 2, 3, 4], 0, 0));
// []
console.log(mySlice([1, 2, 3, 4], 1, 2));
// [2]

console.log(mySlice([1, 2, 3, 4], -1));
// [4]
console.log(mySlice([1, 2, 3, 4], -2));
// [3, 4]
console.log(mySlice([1, 2, 3, 4], -3));
// [2, 3, 4]
console.log(mySlice([1, 2, 3, 4], -4));
// [1, 2, 3, 4]

console.log(mySlice([1,2,1]));
// [1, 2, 1]

console.log(mySlice([1, 2, 3, 4], 0));
// [1, 2, 3, 4]
console.log(mySlice([1, 2, 3, 4], 1));
// [2, 3, 4]
console.log(mySlice([1, 2, 3, 4], 2));
// [3, 4]
console.log(mySlice([1, 2, 3, 4], 3));
// [4]
console.log(mySlice([1, 2, 3, 4], 4));
// []

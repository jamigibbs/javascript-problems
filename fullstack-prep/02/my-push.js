function myPush(arr, value){
  var arr2 = [value];
  return arr.concat(arr2);
}

//EXAMPLE TESTS

console.log(myPush([1, 2, 3], 4));
//Output: [1, 2, 3, 4]

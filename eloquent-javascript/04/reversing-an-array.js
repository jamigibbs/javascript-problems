function reverseArray(arr){
  var newArray = [];
  for(var i = arr.length - 1; i >= 0; i--){
    newArray.push(arr[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  for(var i = 0; i < Math.floor(array.length / 2); i++){
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

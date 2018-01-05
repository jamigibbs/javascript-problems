function rotate(arr, steps) {
  var newArray = arr;
  for(var i = 0; i < steps; i++){
    var temp = newArray.pop();
    newArray.unshift(temp);
  }
  return newArray;
}

console.log(rotate([10,20,30,40,50,60], 4))

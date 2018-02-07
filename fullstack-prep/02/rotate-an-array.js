function rotate(arr, steps){
  if(steps == 0){
    return arr;
  }

  return rotate( arr.concat( arr.splice(0, 1) ), steps - 1)
}

//EXAMPLE TESTS

console.log(rotate([22, 11, 500, 92], 2));
//Output: [500, 92, 22, 11]

function rotate(arr, steps){
  var section = arr.slice(0, steps);
  arr.splice(0, steps);
  
  return arr.concat(section);
}

//EXAMPLE TESTS

console.log(rotate([22, 11, 500, 92], 2));
//Output: [500, 92, 22, 11]

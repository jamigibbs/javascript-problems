function countUpThenDown(count){
  var arr = [0]

  // Count up
  for(var i = 0; i < count; i++){
    arr.push(i + 1);
  }

  for(var j = count; j > 0; j--){
    arr.push(j - 1);
  }

  return arr;
}

//EXAMPLE TESTS

console.log(countUpThenDown(2));
//OUTPUT: [0, 1, 2, 1, 0]

// console.log(countUpThenDown(0));
//OUTPUT: [0]

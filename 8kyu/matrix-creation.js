function getMatrix(number) {
  var matrix = [];

  // Individual array indexes loop
  for(var i = 0; i < number; i++){
    var temp = [];
    // Number of arrays to create loop
    for(var j = 0; j < number; j++){
      temp[j] = i === j ? 1 : 0;
    }
    matrix.push(temp);
  }

  return matrix;
}

//         [ [1,0,0,0,0],
//         [0,1,0,0,0],
// (5) =>  [0,0,1,0,0],
//         [0,0,0,1,0],
//         [0,0,0,0,1] ]

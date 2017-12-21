function getMatrix(number) {
  var matrix = [];
  var counter = 0;

  for(var i = 0; i < number; i++){
    var temp = [];
    for(var j = 0; j < number; j++){
      temp[j] = counter === j ? 1 : 0;
    }
    matrix.push(temp);
    counter++;
  }

  return matrix;
}

//         [ [1,0,0,0,0],
//         [0,1,0,0,0],
// (5) =>  [0,0,1,0,0],
//         [0,0,0,1,0],
//         [0,0,0,0,1] ]

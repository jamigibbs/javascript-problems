function checkerBoard(size){
  var board = '';

  for(var i = 0; i < size; i++){
    var line = '';

    for(var j = 0; j < size; j++){
      var sum = i + j;
      if(sum % 2 === 0){
        line += ' ';
      } else {
        line += '#';
      }
    }

    line += '\n';
    board += line;
  }
  return board;
}

console.log(checkerBoard(8));

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

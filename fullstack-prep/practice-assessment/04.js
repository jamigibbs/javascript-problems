function rightTriangle(num){
  var triangle = '';

  // loop vertical
  for(var row = num; row > 0; row--){

    // loop horizontal
    for(var j = 0; j < row; j++){
      triangle += '*';
    }

    triangle += '\n';
  }

  return triangle;
}

console.log(rightTriangle(2));
//**\n*

console.log(rightTriangle(4));
//****\n***\n**\n*

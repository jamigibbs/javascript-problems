function checkeredBoard(dimension) {
  if(dimension < 2 || isNaN(dimension) ) { return false }

  var dark = '\u25a0', light = '\u25a1', newLine = '\n';
  var even = dimension % 2 == 0 ? light : dark;
  var odd = dimension % 2 == 0 ? dark : light;

  var board = '';

  for(var i = 1; i <= dimension; i++){
    for(var j = 1; j <= dimension; j++){
      board += (i + j) % 2 == 0 ? even : odd;
      board += j == dimension ? '' : ' ';
    }
    board += i == dimension ? '' : newLine;
  }

  return board;
}

console.log(checkeredBoard(4));

// '□ ■ □ ■\n■ □ ■ □\n□ ■ □ ■\n■ □ ■ □'

// □ ■ □ ■
// ■ □ ■ □
// □ ■ □ ■
// ■ □ ■ □

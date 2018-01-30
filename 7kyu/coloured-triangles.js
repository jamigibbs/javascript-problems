// Recursive solution

function triangle(row) {

  if(row.length < 2){
    return row
  }

  var newRow = '';
  for(var i = 0; i < row.length; i++){
    var set = row[i] + row[i + 1];
    if(set == 'GB' || set == 'BG' || set == 'RR'){
      newRow += 'R'
    } else if(set == 'RG' || set == 'GR' || set == 'BB'){
      newRow += 'B'
    } else if(set == 'BR' || set == 'RB' || set == 'GG'){
      newRow += 'G'
    }
  }

  return triangle(newRow);
}

// console.log('G ->', triangle('RBRGBRBGGRRRBGBBBGG'));
// console.log('G ->', triangle('RBRGBRB'));
// console.log('R ->', triangle('GB'));
// console.log('R ->', triangle('RRR'));
console.log('B ->', triangle('RGBG'));

/*
RGBG
BRR
GR
B
*/

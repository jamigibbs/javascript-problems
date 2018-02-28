function digital_root(n) {
  // Digits array
  var digits = n.toString().split('');

  var total = digits.reduce(function(acc, val){
    return acc += Number(val);
  }, 0)

  if(total.toString().length >= 2){
    return digital_root( total );
  }

  return total
}

console.log(digital_root(132189))
/*
  => 1 + 3 + 2 + 1 + 8 + 9
  => 24 ...
  => 2 + 4
  => 6
*/

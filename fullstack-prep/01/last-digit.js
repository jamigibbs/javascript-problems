function lastDigit(a, b){
  a = a.toString();
  b = b.toString();
  var comp = a.slice(-1)

  return b.endsWith(comp) ? true : false;
}

console.log(lastDigit(25,35));
// true

console.log(lastDigit(77, 999));
// false

console.log(lastDigit(33,3));
// true

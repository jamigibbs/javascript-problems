function repeatStr(n, s) {
  var result = s;

  // Stop looping when we get to desired repeat count
  if(n === 1){ return result; }

  // Increment repeat string and run function again
  // less one increment
  return result += s && repeatStr(n - 1, s);
}

console.log(repeatStr(3, "*"));
// ***
console.log(repeatStr(5, "#"));
// #####
console.log(repeatStr(2, "ha "));
// ha ha

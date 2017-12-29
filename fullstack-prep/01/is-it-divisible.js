function isDivisible(first, second){
  return first % second === 0 ? true : false;
}

//EXAMPLE TESTS
console.log(isDivisible(9, 3));
// OUTPUT: true

console.log(isDivisible(9, 4));
// OUTPUT: false

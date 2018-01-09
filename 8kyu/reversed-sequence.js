const reverseSeq = n => {
  var arr = [n];
  for(var i = n; i > 1; i--){
    arr.push(i - 1);
  }
  return arr;
};

console.log(reverseSeq(5));
// [5, 4, 3, 2, 1]

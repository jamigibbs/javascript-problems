function removeZeros(num){
  var numStr = '' + num;
  var arr = numStr.split('');

  var result = arr.reduce(function(acc, el){
    var strToNum = Number(el);
    if(el != 0){
      if(isNaN(strToNum)){
        acc += el
      } else {
        acc += strToNum
      }
    }
    return acc;
  }, '');

  return result != 0 ? Number(result) : NaN;
}

//EXAMPLE TESTS

console.log(removeZeros(80975002));
//OUTPUT: 89752

console.log(removeZeros(606606.203));
//OUTPUT: 6666.23

console.log(removeZeros(0));
//OUTPUT: NaN

function factorialize(num) {
  var numArr = [];

  for(var i = 1; i <= num; i++){
    numArr.push(i);
  }

  return numArr.reduce(function(prev, curr){
    return prev * curr;
  })
}

// Recursive solution
function factorializeR(num) {
  if(num <= 1 ){
    return 1;
  }

  return num * factorializeR(num - 1)
}

console.log(factorialize(5));
// 120

console.log(factorializeR(5));
// 120

console.log(factorializeR(0));
// 1

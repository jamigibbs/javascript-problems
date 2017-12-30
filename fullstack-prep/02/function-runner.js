function functionRunner(func, value){
  return func(value);
}

//EXAMPLE TEST

function squareNum(x) {
  return x*x;
}

console.log(functionRunner(squareNum, 4));
// OUTPUT: 16

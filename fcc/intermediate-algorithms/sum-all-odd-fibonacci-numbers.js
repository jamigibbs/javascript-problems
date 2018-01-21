function sumFibs(num) {
  // Initialize the array
  var fibArr = [1];

  // Build out our fibonacci array
  for(var i = 1; i <= num;){
    fibArr.push(i);
    i = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
  }

  // Reduce odd items from array
  return fibArr.reduce(function(acc, curr){
    if(curr % 2 !== 0){
      return acc + curr;
    } else {
      return acc;
    }
  }, 0);

}

console.log(sumFibs(4));
// 1 - 1 - 2 - 3
// Result -> 5

console.log(sumFibs(10));
// 1 - 1 - 2 - 3 - 5 - 8
// Result -> 10 (1 + 1 + 3 + 5)

// console.log(sumFibs(1000));
// // 1785

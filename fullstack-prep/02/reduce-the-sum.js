function sumReduce(arr){
  return arr.reduce(function(acc, val){
    return acc += val;
  }, 50)
}


//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50

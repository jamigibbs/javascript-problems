function sumReduce(arr){
  var reducer = function(accumulator, currentValue){
    return arr.length === 0 ? 50 : accumulator + currentValue
  }
  return arr.reduce(reducer, 50);
}


//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50

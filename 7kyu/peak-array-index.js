function peak(arr){

  var peak;

  arr.forEach(function(mark, index){
    var leftSlice = arr.slice(0, index + 1);
    var rightSlice = arr.slice(index + 2, arr.length);

    var leftTotal = leftSlice.reduce(function(acc, val){
      return acc + val;
    }, 0);

    var rightTotal = rightSlice.reduce(function(acc, val){
      return acc + val;
    }, 0);

    if(rightTotal == leftTotal){
      peak = index + 1;
    }
  })

  return peak ? peak : -1;

}

console.log('3', peak([1,2,3,5,3,2,1]));
console.log('2', peak([1,12,3,3,6,3,1]));
console.log('-1', peak([10,20,30,40]));

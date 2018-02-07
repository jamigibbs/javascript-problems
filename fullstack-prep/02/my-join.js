function myJoin(arr, del){
  del = del == '' ? '' : del = del || ',';

  var sliced = arr.reduce(function(acc, val){
    if(val != undefined){
      return acc += val + del;
    }
    return acc;
  }, '')

  return del == '' ? sliced : sliced.slice(0, -1);
}

console.log(myJoin([2, "be", false]));
// '2,be,false'
console.log(myJoin(['hello', undefined, 'world'], ' '));
// 'hello world'
console.log(myJoin([1, 2, 3], '+'));
// '1+2+3'
console.log(myJoin([10, 20, 30, 40, 50], ' '));
// '10 20 30 40 50'
console.log(myJoin(['iced', 'coffee', 'or', 'iced', 'tea'], ''));
// 'icedcoffeeoricedtea'

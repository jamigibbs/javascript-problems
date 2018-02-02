function reject(array, iterator) {
  return array.reduce(function(acc, curr){
    if(!iterator(curr)){
      acc.push(curr)
    }
    return acc;
  }, [])
}

console.log('[1, 3, 5] ->', reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));

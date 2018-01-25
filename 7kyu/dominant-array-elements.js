function solve(arr){

  return arr.filter(function(val, index){
    return arr.slice(index + 1).every(function(el){
      return val > el;
    })
  });

};

console.log('[75,56,55] ->', solve([ 75,47,42,56,13,55]));

console.log('[21,7,5] ->', solve([1,21,4,7,5]));

console.log('[5,4,3,2,1] ->', solve([5,4,3,2,1]));

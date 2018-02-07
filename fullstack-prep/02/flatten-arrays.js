function flatten(arr){
  return arr.reduce(function(acc, val){
    return acc.concat(val)
  }, [])
}

//EXAMPLE TEST

console.log(flatten([1,[2,3],4]));
// OUTPUT: [1,2,3,4];

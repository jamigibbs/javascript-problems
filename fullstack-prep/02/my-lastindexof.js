function myLastIndexOf(arr, searchValue, fromIndex){
  if(fromIndex){
    arr = arr.slice(0, fromIndex);
  }

  var filtered = arr.reduce(function(acc, curr, index){
    if(curr == searchValue){
      return acc.concat(index)
    }
    return acc;
  }, [])

  return filtered.length == 0 ? -1 : filtered[filtered.length - 1];
}

console.log(myLastIndexOf([1,2,1], 1) );
// OUTPUT: 2

console.log(myLastIndexOf([7, 1, 8, 9, 1, 3, 4], 1, 3) );
// OUTPUT: 1

console.log(myLastIndexOf([1,2,1], 1, 1));
// OUTPUT: 0

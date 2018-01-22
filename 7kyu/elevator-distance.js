function elevatorDistance(array) {
  var total = 0;
  return array.reduce(function(acc, curr, index, array){
    // Account for end of array
    if(typeof array[index + 1] == 'number'){
      // Find difference between two adjacent nums and add to total
      total += Math.abs(curr - array[index + 1]);
    }
    return total;
  }, 0)
}

console.log('9 -> ', elevatorDistance([5,2,8]));
console.log('2 -> ', elevatorDistance([1,2,3]));

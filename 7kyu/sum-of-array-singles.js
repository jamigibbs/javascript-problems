function repeats(arr){
  var sum = arr.reduce(function(acc, curr){
    if(arr.indexOf(curr) == arr.lastIndexOf(curr)){
      return acc + curr;
    }
    return acc;
  }, 0)

  return sum;
};


console.log('15 ->', repeats([4,5,7,5,4,8]));
console.log('19 ->', repeats([9, 10, 19, 13, 19, 13]));
console.log('12 ->', repeats([16, 0, 11, 4, 8, 16, 0, 11]));
console.log('22 ->', repeats([5, 17, 18, 11, 13, 18, 11, 13]));
console.log('24 ->', repeats([5, 10, 19, 13, 10, 13]));

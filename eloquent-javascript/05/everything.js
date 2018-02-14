function every(array, test) {
  return array.every(function(val){
    return test(val)
  });
}

function everyAlt(array, test) {
  var count = 0;
  for(var i = 0; i < array.length; i++){
    if(test(array[i])){
      count += 1;
    }
  }

  return count == array.length ? true : false;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everyAlt([1, 3, 5], n => n < 10));
// → true
console.log(everyAlt([2, 4, 16], n => n < 10));
// → false
console.log(everyAlt([], n => n < 10));
// → true

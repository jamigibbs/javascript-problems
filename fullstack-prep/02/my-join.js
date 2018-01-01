function myJoin(arr, del){
  var delimiter = '',
      result = '',
      count = 0;

  if(del === ''){
    delimiter = '';
  } else {
    delimiter = del || ',';
  }
  // clean the array
  for(var i = 0; i <= arr.length; i++){
    if(arr[i] === undefined || arr[i] === null){
      var index = arr.indexOf(i);
      arr.splice(i, 1);
    }
  }

  // Create the string
  while(count < arr.length){
    result += arr[count] + delimiter;
    count++;
  }

  // Cleanup space at end of string
  if(delimiter === ' '){
    return result.trim()
  }

  if(delimiter === ''){
    return result;
  } else {
    // Remove excess delimiter
    return result.slice(0, -1);
  }
}

//EXAMPLE TESTS
console.log(myJoin([2, "be", false]));
// '2,be,false'
console.log(myJoin(['hello', undefined, 'world'], ' '));
// 'hello world'
console.log(myJoin([1, 2, 3], '+'));
// '1+2+3'
console.log(myJoin(['iced', 'coffee', 'or', 'iced', 'tea'], ''));
// 'icedcoffeeoricedtea'
console.log(myJoin([10, 20, 30, 40, 50], ' '));
// '10 20 30 40 50'

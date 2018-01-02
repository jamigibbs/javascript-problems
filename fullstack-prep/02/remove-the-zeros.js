function removeZeros(num){
  if(num === 0){ return NaN; }

  // Convert number to string into array
  var arr = num.toString().split(''),
      cleaned = [];

  // Clean out zeros (truthy)
  for(var i = 0; i < arr.length; i++){
    if(arr[i] != 0){
      cleaned.push(arr[i]);
    }
  }

  // string to number
  return parseFloat(cleaned.join(''));
}

//EXAMPLE TESTS

console.log(removeZeros(80975002));
//OUTPUT: 89752

console.log(removeZeros(606606.203));
//OUTPUT: 6666.23

console.log(removeZeros(0));
//OUTPUT: NaN

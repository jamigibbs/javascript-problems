function range(start, finish, step){
  var arr = [];
  // Check if optional step arg exists
  step = arguments.length === 3 ? step : 1;

  if( step > 0 ) {
    // Positive step
    for(var i = start; i <= finish; i += step){
      arr.push(i);
    }
  } else {
    // Negative step
    for(var i = finish; i >= start; i += step){
      arr.push(i);
    }
  }
  return arr;
}

function sum(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

console.log(range(1, 10, -2));
console.log(sum(range(1, 10)));

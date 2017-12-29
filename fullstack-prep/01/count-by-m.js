function count(max, increment, direction){
  var output = [],
      value = 0,
      length = Math.round(max / increment);

  if(direction === 'Up'){
    for(var i = max; i > length;  i--){
      value += increment;
      output.push(value);
    }
  }

  if(direction === 'Down'){
    value = max;
    output.push(max);
    for(var i = 1; i < length; i++){
      value -= increment;
      output.push(value);
    }
  }

  return output;
}

//EXAMPLE TESTS

console.log(count(11, 2, "Down"));
// OUTPUT: [11, 9, 7, 5, 3, 1]

console.log(count(10, 2, "Up"));
// OUTPUT: [2, 4, 6, 8, 10]

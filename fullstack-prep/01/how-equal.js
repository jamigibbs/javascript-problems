function howEqual(val1, val2){
  var status = null;

  if(val1 == val2){
    status = 'loosely';
  }

  if(val1 === val2){
    status = 'strictly'
  }

  if(val1 != val2){
    status = 'not equal';
  }

  return status;
}



//EXAMPLE TESTS
console.log(howEqual(0,'0'));
// OUTPUT: 'loosely'

console.log(howEqual(3, 9/3));
// OUTPUT: 'strictly'

console.log(howEqual(true, 'truthy'));
// OUTPUT: 'not equal'

console.log(howEqual(false, '0'));
// OUTPUT: 'loosely'

console.log(howEqual(0,''));
// OUTPUT: 'loosely'

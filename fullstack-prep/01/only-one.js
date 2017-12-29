function onlyOne(){
  var args = arguments,
      truthyCount = 0;

  for(var i = 0; i < arguments.length; i++){
    truthyCount += arguments[i] ? 1 : 0;
  }

  return truthyCount > 1 || truthyCount === 0 ? false : true;
}


//EXAMPLE TESTS

console.log(onlyOne(false, false, true));
// OUTPUT: true

console.log(onlyOne(0, 1, 2));
// OUTPUT: false

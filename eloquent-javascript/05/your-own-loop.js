function loop(value, testFunc, updateFunc, bodyFunc){
  // Run the test function on the current loop value, and stops if that returns false.
  if(testFunc(value)){
    for(var i = value; i > 1; i--){
      
      // Call the body function, giving it the current value.
      bodyFunc(value)

      //  Call the update function to create a new value and starts from the beginning.
      value = updateFunc(value);
    }
    return value
  }
  return false;
}

console.log(loop(3, n => n > 0, n => n - 1, console.log))
// → 3
// → 2
// → 1

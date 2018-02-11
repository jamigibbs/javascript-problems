/*
 * Complete the function below.
 */
function firstRepeatingLetter(str) {
  var comp = str[0];

  if(str.length < 1){
    return false;
  }

  for(var i = 1; i < str.length; i++){
    if(comp == str[i]){
      return str[i]
    }
  }

  return firstRepeatingLetter( str.slice(1) )
}

console.log('r ->', firstRepeatingLetter('Grace Hopper Academy'));
console.log('a ->', firstRepeatingLetter('Shanna Gregory'));
console.log('i ->', firstRepeatingLetter('David & Nimit'));

/*
 * Complete the function below.
 */
function firstRepeatingLetter(str) {
  for(var i = 0; i < str.length; i++){
    var temp = 0;
    for(var j = 0; j < str.length; j++){
      if(str[i] === str[j]){
        temp++;
        if(temp >= 2){
          return str[i]
        }
      }
    }
  }
}

console.log(firstRepeatingLetter('Grace Hopper Academy'));
// r

console.log(firstRepeatingLetter('Shanna Gregory'));
// a

console.log(firstRepeatingLetter('David & Nimit'));
// i

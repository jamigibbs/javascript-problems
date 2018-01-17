function repeatStringNumTimes(str, num) {
  var repeatingStr = '';

  // Return an empty string if num is not a positive number.
  if(num < 0){
    return repeatingStr;
  }

  for(var i = 0; i < num; i++){
      // Add str into new repeating string
      repeatingStr += str;
  }

  return repeatingStr;
}

// Recursive solution
function repeatStringNumTimesR(str, num){
  // Return an empty string if num is not a positive number.
  if(num < 0){
    return '';
  }

  if(num === 1){
    return str;
  }

  return str + repeatStringNumTimesR(str, num - 1);
}

console.log(repeatStringNumTimes("abc", 3));
// abcabcabc

console.log(repeatStringNumTimesR("abc", 3));
// abcabcabc

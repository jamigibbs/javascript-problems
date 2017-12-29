function palindrome(str){
  var reverse = str.split('').reverse().join('');
  return str === reverse ? true : false;
}

//EXAMPLE TESTS
console.log(palindrome("racecar"));
//OUTPUT: true

console.log(palindrome("animal"));
//OUTPUT: false

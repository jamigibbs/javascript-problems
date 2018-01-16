function palindrome(str) {
  // remove all non-alphanumeric characters
  var cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse string
  var reversed = cleaned.split('').reverse('').join('');

  // Compare original and reversed strings
  return reversed == cleaned ? true : false;
}

console.log(palindrome('_eye'));
// true

console.log(palindrome("0_0 (: /-\ :) 0-0"))
// true

console.log(palindrome('A man, a plan, a canal. Panama'));
// true

console.log(palindrome('not a palindrome'));
// false

console.log(palindrome('race car'));
// true

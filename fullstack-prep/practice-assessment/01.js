/*
 * Complete the function below.
 */
function palindrome(str) {
    str = str.toLowerCase();
    var reverse = str.toLowerCase().split('').reverse().join('');
    return reverse === str ? true : false;
}

console.log(palindrome('racecar'));
// true

console.log(palindrome('animal'));
// false

console.log(palindrome('aCaraManaMaraca'));
// true

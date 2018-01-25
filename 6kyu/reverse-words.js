function reverseWords(str) {
  var arr= str.split(' ');
  var reversed = '';

  arr.map(function(value){
    reversed += value.split('').reverse().join('') + ' ';
  })

  return reversed.trim();
}

console.log('sihT si na !elpmaxe -> ', reverseWords("This is an example!"));
console.log('elbuod  secaps -> ', reverseWords("double  spaces"));
console.log('ehT kciuq nworb xof spmuj revo eht yzal .god ->', reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log('elppa ->', reverseWords('apple'));
console.log('a b c d ->', reverseWords('a b c d'));
console.log('elbuod  decaps  sdrow ->', reverseWords('double  spaced  words'));

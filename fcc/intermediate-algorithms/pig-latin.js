function translatePigLatin(str) {

  // Get first vowel index in string
  var firstVowel = str.match(/[aeiou]/);
  var firstVowelIndex = firstVowel['index'];
  
  // Get the front letters to move to the end; add 'ay'
  var cut = str.substr(firstVowelIndex );

  // Form the pig latin word
  return firstVowelIndex == 0 ? str + 'way' : cut + str.slice(0, firstVowelIndex) + 'ay';
}

console.log(translatePigLatin("glove"));
// oveglay

console.log(translatePigLatin("california"));
// aliforniacay

console.log(translatePigLatin("algorithm"));
// algorithmway

function checkVowel(string, position) {
  var stringArray = string.toLowerCase().split(''),
      vowels = ['a', 'e', 'i', 'o', 'u'];

  for(var i = 0; i < vowels.length; i++){
    var letter = stringArray[position];
    if(letter === vowels[i]){
      return true;
    }
  }

  return false;
};



console.log(checkVowel('cat', 1));
// true

console.log(checkVowel('cat', 0));
// false

console.log(checkVowel('cat', 4));
// false

console.log(checkVowel('Amanda', -2));
// false

console.log(checkVowel('Amanda', 0));
// true

console.log(checkVowel('Amanda', 2));
// true

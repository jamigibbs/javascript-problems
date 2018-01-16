function findLongestWord(str) {
  var longest = '';
  var wordArray = str.split(' ');

  for(var i = 0; i < wordArray.length; i++){
    if(wordArray[i].length > longest.length){
      longest = wordArray[i];
    }
  }

  return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 6

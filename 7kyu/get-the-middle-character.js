function getMiddle(s){
  var wordLength = s.length;
  var divWord = wordLength / 2;
  var wordRounded = Math.floor(divWord);

  if(wordLength % 2 === 0){
    return s.substr(wordRounded - 1, 2);
  } else {
    return s.substr(wordRounded, 1);
  }
}

/*
  You are going to be given a word. Your job is to return the middle
  character of the word. If the word's length is odd, return the middle character.
  If the word's length is even, return the middle 2 characters.
*/

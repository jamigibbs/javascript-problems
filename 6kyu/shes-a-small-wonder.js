function Robot() {
  this.knownWords = [ 'thank', 'you', 'for', 'teaching', 'me', 'i', 'already', 'know', 'understand', 'the', 'word' ];
}

Robot.prototype.learnWord = function(word) {
  var array = this.knownWords;
  var wordLower = word.toLowerCase();
  var regex = /[^a-z]/;

  if( regex.test( wordLower ) || word === '' || word === ' ' ) {
    return 'I do not understand the input';
  } else if(array.indexOf(wordLower) === -1){
    this.knownWords.push(wordLower);
    console.log(array);
    return 'Thank you for teaching me ' + word;
  } else {
    return 'I already know the word ' + word;
  }

};

function countFeelings(string, array) {
  var score = 0;

  // looping through full words
  for(var i = 0; i < array.length; i++){
    var word = array[i].split('');

    // loop through letters
    for(var j = 0; j < word.length; j++){

      // Check for matching letter in string
      if( string.includes( word[j] )){

        // If all letters match at the end of the word
        if(j == word.length - 1){

          // Increment score counter
          score++;
        }

      // If a letter doesn't match, move onto next word
      } else { break }

    }

  }``

  // Grammar logic
  if (score === 0) { return score + ' feelings.' }
  return score < 2 ? score + ' feeling.' : score + ' feelings.';
}


// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'

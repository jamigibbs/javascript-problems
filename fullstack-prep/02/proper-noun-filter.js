function properNounFilter(word){
  var firstLetter = word.slice(0, 1),
      count = 0;

  for(var i = 0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase()) {
      count++;
    }
  }

  if(count++ > 1){
    return false
  }
  return firstLetter === firstLetter.toUpperCase() ? true : false;
}

//EXAMPLE TESTS

console.log(properNounFilter('coffee'));
// OUTPUT: false

console.log(properNounFilter('Einstein'));
// OUTPUT: true

console.log(properNounFilter('ApoLLo'));
// OUTPUT: false

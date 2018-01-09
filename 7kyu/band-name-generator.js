function bandNameGenerator(str){
  var capitalFirstLetter = str.slice(0, 1).toUpperCase();
  var capitalizedWord = capitalFirstLetter + str.slice(1);

  // Repeating word style
  if(str[0] === str[str.length - 1]){
    return capitalizedWord + str.slice(1);
  }

  return 'The ' + capitalizedWord;
}


console.log(bandNameGenerator('knife'));
// The Knife

console.log(bandNameGenerator('tart'));
// Tartart

console.log(bandNameGenerator('sandles'));
// Sandlesandles

console.log(bandNameGenerator('bed'));
// The Bed

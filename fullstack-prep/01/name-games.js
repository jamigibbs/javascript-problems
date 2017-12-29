function playNameGame(name){
  if(name.startsWith('A') ||
     name.startsWith('E') ||
     name.startsWith('I') ||
     name.startsWith('O') ||
     name.startsWith('U') ) {
    var nameMod = name.toLowerCase();
  } else {
    // Remove first letter if doesn't start with a vowel
    var nameMod = name.substr(1);
  }

  return name + ' ' + name + ' Bo ' + 'B' + nameMod + ' Banana Fana Fo ' + 'F' + nameMod + ' Fee Fi Mo ' + 'M' + nameMod + ' ' + name;
}

//EXAMPLES TESTS
console.log(playNameGame('Daniel'));
// OUTPUT: "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"

console.log(playNameGame('Ariel'));
// OUTPUT: "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"

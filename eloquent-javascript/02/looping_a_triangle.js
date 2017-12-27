function pyramid(height){
  var level = '#';
  console.log(level);
  while(level.length < height) {
    console.log(level + '#');
    level += '#';
  }
}

pyramid(7);

// #
// ##
// ###
// ####
// #####
// ######
// #######

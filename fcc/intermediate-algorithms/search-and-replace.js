function myReplace(str, before, after) {
  // Check for first letter capitalized
  if(before[0] === before[0].toUpperCase()){
    // if true, capitalize replacement word
    after = after[0].toUpperCase() + after.slice(1);
  }

  // return new string with regex replacement
  return str.replace(before, after);
}

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// // A quick brown fox leaped over the lazy dog

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// He is Sitting on the couch

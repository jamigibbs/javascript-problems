function confirmEnding(str, target) {
  // Get the target length
  var targetLength = target.length;

  // Locate that length from the end of the str
  var strSection = str.substr(str.length - targetLength);

  // Compare the target with the end of the str
  return target == strSection ? true : false;
}

console.log(confirmEnding("Open sesame", "same"));
// true

console.log(confirmEnding("Connor", "n"));
// false

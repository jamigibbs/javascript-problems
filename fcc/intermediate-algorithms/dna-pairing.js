function pairElement(str) {
  // Put string into an array
  var elements = str.split('');

  // Find the matching pairs
  var pairs = elements.map(function(element){
    // Create our inside array
    var pair = [];
    // Add the element we want to match
    pair.push(element);
    // Find the match and push to its array
    if(element == 'A'){
      pair.push('T');
    } else if (element == 'G') {
      pair.push('C')
    } else if (element == 'T') {
      pair.push('A');
    } else if (element == 'C'){
      pair.push('G')
    }
    // Return the transformed array
    return pair;
  });

  return pairs;
}

console.log(pairElement("ATCGA"));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

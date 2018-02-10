function frequencyAnalysis(string){
  var arr = string.split('');
  return arr.reduce(function(acc, val){
    typeof acc[val] === 'undefined' ? acc[val] = 1 : acc[val]++;
    return acc;
  }, {})
}

console.log(frequencyAnalysis('abca'));
// OUTPUT: {a: 2, b: 1, c: 1}

console.log(frequencyAnalysis(''));
// OUTPUT: { }

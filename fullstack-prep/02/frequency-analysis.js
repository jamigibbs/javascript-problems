function frequencyAnalysis(string){
  var arr = string.split('');
  var results = {};

  // Create initial object
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== results[arr[i]]){
      results[arr[i]] = 0;
    }
  }

  for( var prop in results){
    for(var j = 0, length = arr.length; j < length; j++){
      if(arr[j] === prop){
        results[prop]++;
      }
    }
  }

  return results;
}

console.log(frequencyAnalysis('abca'));
// OUTPUT: {a: 2, b: 1, c: 1}

console.log(frequencyAnalysis(''));
// OUTPUT: { }

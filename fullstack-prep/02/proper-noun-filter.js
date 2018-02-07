function properNounFilter(word){
  var arr = word.split('');
  var result = [false, 0];

  arr.forEach(function(val){
    if(arr[0] == val.toUpperCase()){
      result[0] = true;
    }
    if(val == val.toUpperCase()){
      result[1]++;
    }
  });

  return result[0] == true && result[1] == 1 ? true : false;
}

//EXAMPLE TESTS

console.log(properNounFilter('coffee'));
// OUTPUT: false

console.log(properNounFilter('Einstein'));
// OUTPUT: true

console.log(properNounFilter('ApoLLo'));
// OUTPUT: false

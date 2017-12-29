function repeat(str, num){
  var final = str;
  if(num === 0){
    return '';
  }
  for(var i = 1; i < num; i++){
    final += str;
  }
  return final;
}

//EXAMPLE TESTS

console.log(repeat("yo", 4));
// OUTPUT: 'yoyoyoyo'

console.log(repeat("yo", 0));
// OUTPUT: ''

console.log(repeat("bye", 6));
// OUTPUT: 'byebyebyebyebyebye'

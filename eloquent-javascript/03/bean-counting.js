function countBs(val){
  var count = 0;
  for(var i = 0; i < val.length; i++){
    if(val.charAt(i) === 'B'){
      count++;
    }
  }
  return count;
}

function countChar(val, char){
  var count = 0;
  for(var i = 0; i < val.length; i++){
    if(val.charAt(i) === char){
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

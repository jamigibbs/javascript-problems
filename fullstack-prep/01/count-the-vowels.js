function vowelsCount(str){
  var vowels = ['a', 'e', 'i', 'o', 'u'],
      count = 0,
      str = str.toLowerCase();

  for(var i = 0; i <= str.length; i++){
    var pos = str.indexOf(vowels[i]);
    while(pos !== -1){
      count++;
      pos = str.indexOf(vowels[i], pos + 1);
    }
  }
  return count;
}

//EXAMPLE TESTS
console.log(vowelsCount("AeIoU"));
// OUTPUT: 5

console.log(vowelsCount('Yankees'));
// OUTPUT: 3

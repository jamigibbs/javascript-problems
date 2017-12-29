function reverseString(string){
  var reversed = '';
  for(var i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
// OUTPUT: 'olleh'

console.log(reverseString('Greetings from the moon!'));
// OUTPUT: '!noom eht morf sgniteerG'

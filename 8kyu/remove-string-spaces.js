function noSpace(x){

  // Put string into array
  var arr = x.split('');

  // Create our cleaned array
  var cleaned = [];

  // Check string array for empty elements
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== ' '){
      // Push legit elements into cleaned array
      cleaned.push(arr[i]);
    }
  }
  
  return cleaned.join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
// 8j8mBliB8gimjB8B8jlB

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));
// 88Bifk8hB8BB8BBBB888chl8BhBfd

console.log(noSpace('8aaaaa dddd r     '));
// 8aaaaaddddr

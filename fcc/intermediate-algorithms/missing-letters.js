function fearNotLetter(str) {

  var compare = str.charCodeAt(0);
  var strArr = str.split('');
  var missing = undefined;

  strArr.map(function(letter, index){
    if(str.charCodeAt(index) == compare){
      compare++
    } else {
      missing = String.fromCharCode(compare);
    }
  })

  return missing;

  // if(str[0] !== 'a'){ return 'undefined' };
  //
  // var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  // var strArr = str.split('');
  //
  // // Get the letter set we want to match
  // var setStart = alphabet.indexOf(str[0]);
  // var setEnd = str.length;
  // var setLength = setEnd - setStart;
  // var set = [];
  //
  // // Our match set
  // var count = 0;
  // while(count <= setLength){
  //   set.push(alphabet[count]);
  //   count++;
  // }
  //
  // // Compare the given string to letter set
  // var missingLetter = set.find(function(letter, index){
  //   if(str[index] !== letter) {
  //     return index;
  //   }
  // })
  //
  // // Return the missing letter
  // return missingLetter;
}

console.log(fearNotLetter("bcd"));
// undefined

console.log(fearNotLetter("abcdefghjklmno"));
// i

console.log(fearNotLetter("abce"));
// d

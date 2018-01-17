function mutation(arr) {
  var haystack = arr[0].toLowerCase().split('');
  var needle = arr[1].toLowerCase();
  var count = 0;

  // Use indexOf to find element in first string
  for(var i = 0; i < needle.length; i++){
    // If match is found, then increment count
    if(haystack.indexOf(needle[i]) !== -1){
      count++;
    }
  }

  // When count === second string length, true
  return count === needle.length ? true : false;
}

console.log(mutation(["floor", "for"]));
// true

console.log(mutation(["hello", "neo"]));
// false

console.log(mutation(["voodoo", "no"]));
// false

console.log(mutation(["hello", "hey"]));
// false

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// true

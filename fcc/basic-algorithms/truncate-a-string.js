function truncateString(str, num) {
  var slicedStr = '';

  // Check if num is same length of str and return string
  if(num >= str.length){
    return str;
  }

  // Check if num is > 3. If true, dots add to length of string
  // If false, dots do not add to length of string.
  // Inserting ... to the end will add to the string length.
  slicedStr = num > 3 ? str.slice(0, num - 3) : slicedStr = str.slice(0, num);

  // Concat ... to string.
  return slicedStr + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
// A-tisket a-tasket A green and yellow basket

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// A-tisket a-tasket A green and yellow basket

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
// Peter Piper...

console.log(truncateString("Absolutely Longer", 2));
// Ab...

console.log(truncateString("Absolutely Longer", 2));
// Ab...

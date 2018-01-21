function convertHTML(str){
  // Put string into array
  var strArray = str.split('');

  // Map through array and check each element against regex
  return strArray.map(function(value){
    return value.replace(/&|<|>|"|'/, function(match, offset, string){
      // Replace matching element with char entitiy
      switch(match){
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&apos;';
      }
    });
  })
  // Put the array back together as a string
  .join('');
}

console.log(convertHTML("Dolce ' Gabbana & Jami"));
// Dolce &​amp; Gabbana

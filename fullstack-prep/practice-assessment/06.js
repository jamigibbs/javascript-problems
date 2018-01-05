function indexOf(str, searchQuery){

  // string loop
  for(var i = 0; i < str.length; i++){

    // query loop
    for(var q = 0; q < searchQuery.length; q++){

      // Compare search query string to next letter in string
      if(searchQuery[q] !== str[i + q]){
        break;
      }

      if(q === searchQuery.length - 1){
        return i;
      }

    }

  }

  return -1;
}

console.log(indexOf('Hello', 'lo'));
// 3

function underToCamel(name){
  // string to array
  var arr = name.split('');

  // find all underscores
  for(var i = 0; i <= arr.length; i++){
    if(arr[i] === '_'){
      // Add uppercase to adjacent property
      arr[i + 1] = arr[i + 1].toString().toUpperCase();
      // Remove underscore
      arr.splice(i, 1);
    }
  }

  // make first letter lowercase
  arr[0].toLowerCase();

  // Join the array
  return arr.join('');
}

//EXAMPLE TESTS

console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"

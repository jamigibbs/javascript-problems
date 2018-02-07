function underToCamel(name){
  return name
    .split('_')
    .reduce(function(acc, val, i){
      return acc = i > 0 ? acc += val.charAt(0).toUpperCase() + val.slice(1) : val;
    }, [])
}

// O(N)

//EXAMPLE TESTS

console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"

var humanYearsCatYearsDogYears = function(humanYears) {
  var arr = Array.from(Array(humanYears).keys())
  var dog = 0, cat = 0;

  arr.map(function(value){
    // 1st year
    if(value == 0){
      dog += 15;
      cat += 15;
    // 2nd year
    } else if (value == 1){
      dog += 9;
      cat += 9;
    // All other years
    } else {
      dog += 5;
      cat += 4;
    }
  })

  return [humanYears, cat, dog];
}

console.log('[1,15,15] ', humanYearsCatYearsDogYears(1))
console.log('[2,24,24] ', humanYearsCatYearsDogYears(2));
console.log('[10,56,64] ', humanYearsCatYearsDogYears(10));

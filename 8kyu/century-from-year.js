function century(year){
  var yearArr = year.toString().split('');

  // if year is only 2 digits, 1st century
  if(yearArr.length === 2){
    return 1;
  }

  // if year is 3 digits, century is first digit plus 1
  if(yearArr.length === 3){
    return (parseInt(yearArr.splice(0, 1).join(''))) + 1;
  }

  // if year ends in 00, use first two digits to get century
  if(yearArr[yearArr.length - 1] == 0 && yearArr[yearArr.length - 2] == 0){
    return parseInt(yearArr.splice(0, 2).join(''));
  }

  // Otherwise the century is the first two digits of the year plus 1
  return (parseInt(yearArr.splice(0, 2).join(''))) + 1;
}

console.log(century(1705));
// 18
console.log(century(1900));
// 19
console.log(century(1601));
// 17
console.log(century(2000));
// 20
console.log(century(687));
// 7
console.log(century(89));
// 1

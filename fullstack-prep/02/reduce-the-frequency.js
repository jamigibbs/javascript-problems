function strFrequency(arr){
  return arr.reduce(function(acc, val){
    typeof acc[val] === 'undefined' ? acc[val] = 1 : acc[val]++;
    return acc;
  }, {});
}

//EXAMPLE TEST

var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

console.log(strFrequency(names));
//OUTPUT: {Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1}

function solve(s){

  var count = 0;
  for(var i = 0; i < s.length; i++){
    var temp = s[i];

    /*
      0: 1 -> 0 + 1
      1: 3 -> 1 + 1
      2: 4 -> Not odd
      3: 1 -> 3 + 1
      Total: 7
    */
    if(temp % 2 != 0){
      count += (i + 1)
    }

  }

  return count;
};

console.log('7', solve("1341"));
console.log('10', solve("1357"));
console.log('12', solve("13471"));
console.log('13', solve("134721"));
console.log('20', solve("1347231"));
console.log('28', solve("13472315"));

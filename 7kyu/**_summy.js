function summy(stringOfInts){
  var arr = Array.isArray(stringOfInts) ? stringOfInts : stringOfInts.split(' ');
  var sum = 0;

  for(var i = 0; i < arr.length; i++){
    sum += Number(arr[0]);
    return sum + summy(arr.splice(1))
  }

  return sum
}


console.log('20', summy("10 10"))
console.log('6', summy("1 2 3"))
console.log('10', summy("1 2 3 4"))
console.log('15', summy("1 2 3 4 5"))
console.log('0', summy("0 0"))

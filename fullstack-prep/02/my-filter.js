function myFilter(arr, callback){
  var newArr = [];
  arr.forEach(function(val){
    if(callback(val)){
      newArr.push(val)
    }
  })
  return newArr;
}

//EXAMPLE TESTS

var arr = [1,2,3,4,5];

function isEven(num) {
  return num % 2 === 0;
}

console.log(myFilter(arr, isEven));
//OUTPUT: [2,4]

console.log(myFilter(arr, function(num) {
  return !isEven(num);
}));
//OUTPUT: [1,3,5];

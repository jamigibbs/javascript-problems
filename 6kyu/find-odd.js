function findOdd(A) {
  // Initialize counter object
  var obj = {};

  A.forEach(function(el){
    if(obj.hasOwnProperty(el) == false){
      // Put each number into object with num as key
      obj[el] = 1;
    } else {
      // Increment each key value in object by 1
      var i = obj[el] + 1;
      obj[el] = i;
    }
  })

  // Find the object value that's odd and return key
  for(var prop in obj){
    if(obj[prop] % 2 !== 0){
      return Number(prop)
    }
  }
}

console.log('5 ->', findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

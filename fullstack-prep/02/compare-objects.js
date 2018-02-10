function compareObjects(objA, objB){
  var result = true;
  Object.keys(objA).forEach(function(keyA){
    return Object.keys(objB).find(function(keyB){
      if(objA[keyA] != objB[keyB] || keyA != keyB){
        result = false;
      }
    })
  })
  return result;
}

//EXAMPLE TESTS

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true

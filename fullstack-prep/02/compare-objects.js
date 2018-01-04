function compareObjects(objA, objB){
  // Loop through first obj
  for(var propA in objA){
    // Loop through second obj
    for(var propB in objB){
      if(propA !== propB || objA[propA] !== objB[propB]){
        return false;
      }
    }
  }
  return true;
}

//EXAMPLE TESTS

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(function(acc, curr){
    if(curr){ acc++ }
    return acc;
  }, 0)
}


var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

console.log('17', countSheeps(array1))

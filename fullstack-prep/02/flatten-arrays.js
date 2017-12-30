function flatten(arr){
  var flatArray = [];

  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'object'){
      flatArray.push(arr[i]);
    } else {
      for(var j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    }
  }
  return flatArray;
}

//EXAMPLE TEST

console.log(flatten([1,[2,3],4]));
// OUTPUT: [1,2,3,4];

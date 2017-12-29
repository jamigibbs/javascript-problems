function findVacantRooms(arr){
  var vacant = [];
  for(var i = 0; i <= arr.length; i++){
    if(arr[i] === 'vacant'){
      vacant.push(i);
    }
  }
  return vacant;
}

//EXAMPLE TEST
var rooms = ["vacant", "occupied", "occupied", "vacant", "vacant"];
console.log(findVacantRooms(rooms));
//OUTPUT: [0,3,4]

function getHeight(cycles) {
  var height = 1;
  for(var i = 0; i < cycles; i++){
    if(i % 2 === 0){
      height *= 2;
    } else {
      height += 1;
    }
  }
  return height;
}


console.log(getHeight(3))
// 6

console.log(getHeight(4))
// 7

console.log(getHeight(5))
// 14

function aspectRatio(x,y){
  
  var width = x;
  var height = y;

  // Multiply the height by 16:9 aspect ratio
  var adjustedWidth = height * (16 / 9);

  // Round up
  return [ Math.ceil(adjustedWidth), height];
}

console.log(aspectRatio(640, 480));
// [854,480]

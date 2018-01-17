function bouncer(arr) {
  return arr.filter(function(val){
    if(val != true || val == 1){
      return val;
    }
  });
}

// console.log(bouncer([7, "ate", "", false, 9]));
// // [7, "ate", 9]

console.log(bouncer([1, null, NaN, 2, undefined]));
// [1, 2]

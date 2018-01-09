function add(n) {
  var sum = function(x){
    return add(n + x)
  }

  sum.valueOf = function(){
    return n;
  }

  return sum;
}

console.log(add(1));
// 1

console.log(add(1)(2));
// 3

console.log(add(1)(2)(3));
// 6

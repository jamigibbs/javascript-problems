function solve(a0, a1, a2, b0, b1, b2){
  console.log(arguments[0]);

    var arr = Array.prototype.slice.call(arguments);
    var a = arr.splice(0, arr.length / 2);
    var b = arr;

    var score = [0, 0];

    for(var i = 0; i < a.length; i++){
      if(a[0] > b[0]){
        score[0]++;
      } else if (a[0] < b[0]) {
        score[1]++
      }
      return score + solve();
    }

    return score;
}

console.log('1 1', solve(5,6,7,3,6,10))

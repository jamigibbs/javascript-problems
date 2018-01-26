function array_diff(a, b) {
  if(b.length == 0){ return a }

  var acc = [];

  a.filter(function(curr){
    b.forEach(function(val, index){
      if(curr != b[index]){
        acc.push(curr);
      }
    })
  })

  return acc;
}

console.log('[1]', array_diff([1,2,2],[2]))

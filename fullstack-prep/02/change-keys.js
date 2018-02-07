function changeKeys(keysToChange, steps) {
  var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  var shift = [];

  keys.forEach(function(val, i){

    var found = keysToChange.find(function(val){
      return val == keys[i];
    })

    if(found){
      if(i + steps > keys.length){
        var modStep = steps - (keys.length - i);
        shift.push(keys[modStep])
      } else {
        shift.push(keys[i + steps])
      }
    }

  })

  return shift;
}

console.log(changeKeys(['E', 'F'], 1));
// OUTPUT: ['F', 'F#']

console.log(changeKeys(['G'], 5));
// OUTPUT: ['C']

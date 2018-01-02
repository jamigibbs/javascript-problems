function changeKeys(arr, step){
  var notes = [],
      keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

  for(var i = 0; i < arr.length; i++){
    keys.indexOf(arr[i])
    var position = keys.indexOf(arr[i]) + step;
    if(position >= 12) {
      notes.push(keys[position - 12]);
    } else {
      notes.push(keys[position]);
    }
  }

  return notes;
}

//EXAMPLE TESTS

console.log(changeKeys(['E', 'F'], 1));
// OUTPUT: ['F', 'F#']

console.log(changeKeys(['G'], 5));
// OUTPUT: ['C']

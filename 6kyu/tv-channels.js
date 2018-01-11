function redarr(arr) {
  var noDuplicates = [];

  // Remove duplicates
  for(var i = 0; i < arr.length; i++){
    if(noDuplicates.indexOf(arr[i]) === -1){
      noDuplicates.push(arr[i]);
    }
  }

  // Sort channels alphabetically
  noDuplicates.sort();

  // Put channels into object
  var channels = {};
  for(var j = 0; j < noDuplicates.length; j++){
    channels[j] = noDuplicates[j]
  }

  return channels;
}

console.log(redarr(["MTV", "BBC1","BBC2"]));
// {'0': 'BBC1','1': 'BBC2','2': 'MTV'}

console.log(redarr(["BBC1","BBC1","BBC2","MTV"]));
// {'0': 'BBC1','1': 'BBC2','2': 'MTV'}

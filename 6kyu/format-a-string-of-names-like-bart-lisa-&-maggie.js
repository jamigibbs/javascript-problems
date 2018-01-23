function list(names){
  var string = '';
  var arr = [];

  // Put all name into array
  names.forEach(function(value){
    return arr.push(value.name);
  })

  // Map over array names, push to string based on position
  arr.map(function(value, index){
    var namesCount = arr.length;
    if(index + 1 == namesCount && namesCount > 2){
      string += ' & ' + value;
    } else if(index + 1 == namesCount - 1 && namesCount > 2){
      string += value;
    } else if(arr.length > 2){
      string += value + ', ';
    } else if(index == 1){
      string += ' & ' + value;
    } else {
      string += value;
    }
  })

  return string ? string : '';
}


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
// 'Bart, Lisa, Maggie, Homer & Marge'

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))
// 'Bart, Lisa & Maggie'

console.log(list([{name: 'Bart'},{name: 'Lisa'}]))
// 'Bart & Lisa'

console.log(list([{name: 'Bart'}]))
// 'Bart'

console.log(list([]))
// ''

function arrayToList(array){
  var list = null;
  // Build object list from back to front
  for(var i = array.length - 1; i >= 0; i--){
    list = {value: array[i], rest: list}
  }
  return list;
}

function listToArray(list){
  var array = [];
  // Point node to the current sublist
  for(var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list){
  var newList = {value: value, rest: list};
  return newList;
}

// returns the element at the given position in the list,
// or undefined when there is no such element.
function nth(list, location){
  if(!list){
    return undefined;
  } else if(location === 0){
    return list.value;
  }
  return nth(list.rest, location - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

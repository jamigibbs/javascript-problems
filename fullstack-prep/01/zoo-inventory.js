function zooInventory(zoo){
  var description = [];
  for(var i = 0; i < zoo.length; i++){
    description.push(zoo[i][0] + ' the ' + zoo[i][1][0] + ' is ' + zoo[i][1][1]);
  }
  return description;
}

//EXAMPLE TESTS

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

console.log(zooInventory(myZoo));
// OUTPUT:
// [
//   'King Kong the gorilla is 42',
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]

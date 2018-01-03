function objectifier(data){
  var obj = {}

  for(var i = 0; i < data.length; i++){
    var propName = data[i][0];

    // Add parent level
    obj[propName] = {};

    var values = data[i][1];

    // Add children
    for(var j = 0; j < values.length; j++){
      if(j % 2 === 0){
        obj[propName][values[j]] = values[j + 1];
      }
    }

  }
  return obj;
}

//EXAMPLE TEST

var data = [
  [ 'animals',
    [
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],
  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
]

console.log(objectifier(data));
//OUTPUT:
//
// {
// animals : {
//     dogs : ['Corgi', 'Sheltie'],
//     cats : ['Tabby','Black'],
//     pigs : ['Teacup']
// },
// guitars : {
//     Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
//     Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
// }
// }

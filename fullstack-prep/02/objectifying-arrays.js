function objectifier(data){
  var obj = {}

  data.forEach(function(val, i){

    var key = data[i][0]
    obj[key] = {}

    return data[i][1].forEach(function(type, j){
      if(j % 2 == 0){
        obj[key][type] = data[i][1][j + 1];
      }
    })

  });

  return obj
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

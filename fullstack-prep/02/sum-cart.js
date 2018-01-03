function sumCart(cart){
  var total = 0;

  for(var i = 0; i < cart.length; i++){
    total += cart[i][1]['quantity'] * cart[i][1]['price'];
  }
  return total;
}

//EXAMPLE TESTS

var cart = [
    ["tofu", {"quantity" : 3,"price" : 4.5} ],
    ["sriracha", {"quantity" : 1,"price" : 5} ],
    ["toilet paper", {"quantity" : 12,"price" : 1.75} ],
    ["Drano", {"quantity" : 1,"price" : 13} ],
    ["orichette", {"quantity" : 2,"price" : 7.5} ],
    ["hummus", {"quantity" : 2,"price" : 5.99} ],
    ["bison meat", {"quantity" : 3,"price" : 20.99} ],
    ["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
];

console.log(sumCart(cart))
//OUTPUT: 217.42

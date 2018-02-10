function sumCart(cart){
  return cart.reduce(function(acc, curr){
    return acc += curr[1].quantity * curr[1].price;
  }, 0)
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

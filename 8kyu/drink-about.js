function peopleWithAgeDrink(old) {
  var beverage = '';

  switch(true) {
    case (old >= 21):
      beverage = 'whisky'
      break;
    case (old > 17 && old < 21):
      beverage = 'beer'
      break;
    case (old > 13 && old < 18):
      beverage = 'coke'
      break;
    case (old < 14):
      beverage = 'toddy'
      break;
  }

  return 'drink ' + beverage;
};

console.log('drink whisky ->', peopleWithAgeDrink(2))

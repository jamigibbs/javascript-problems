function totalPortfolioValue(ticker, portfolio){
  var total = 0;

  // Portfolio loop
  for(var i = 0; i < portfolio.length; i++){
    // Ticker loop
    for(var j = 0; j < ticker.length; j++){
      if(portfolio[i][0] === ticker[j]){
        total += portfolio[i][1] * ticker[j + 1];
      }
    }
  }

  return total;
}



//EXAMPLE TESTS

var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

console.log(totalPortfolioValue(ticker, portfolio));
//OUTPUT: 4050

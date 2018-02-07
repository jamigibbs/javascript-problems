function totalPortfolioValue(ticker, portfolio){

  return portfolio.reduce(function(acc, curr, i){
    var indexMatch = ticker.indexOf(portfolio[i][0]);

    if(indexMatch || indexMatch == 0){
      var tickerIndex = ticker.indexOf(portfolio[i][0]);
      acc += ticker[tickerIndex + 1] * portfolio[i][1];
    }

    return acc;
  }, 0)

}


//EXAMPLE TESTS
var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

console.log(totalPortfolioValue(ticker, portfolio));
//OUTPUT: 4050

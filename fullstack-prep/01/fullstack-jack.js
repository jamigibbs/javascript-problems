function fullstackJack(player1Hand, player2Hand){
  var score1 = 0,
      score2 = 0,
      cardRank= ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

  for(var i = 0; i < 3; i++){
    // assign value of cards against cardRank array
    var value1 = cardRank.indexOf(player1Hand[i]);
    var value2 = cardRank.indexOf(player2Hand[i]);
    // compare user1 and user2 card & increment scores
    if(value1 > value2){
      score1++;
    } else if (value1 < value2){
      score2++;
    }
  }

  if(score1 === score2){
    return "Tie!"
  } else {
    return score1 > score2 ? "Player 1 wins " + score1 + ' to ' + score2 + '!' : "Player 2 wins "  + score2 + ' to ' + score1 + '!';
  }
}

//EXAMPLE TESTS
console.log(fullstackJack(['A', '7', '8'], ['K', '5', '9']));
//'Player 1 Wins!'

console.log(fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']));
//'Tie!'

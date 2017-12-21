function defineSuit(card) {
  var suit = isNaN(card[1]) ? card[1] : card[2];
  switch(suit){
    case '♣':
      return 'clubs';
      break;
    case '♦':
      return 'diamonds';
      break;
    case '♥':
      return 'hearts';
      break;
    case '♠':
      return 'spades';
      break;
  }
}

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

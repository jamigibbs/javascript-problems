function getIssuer(number) {
  const num = number.toString();
  const firstFour = num.slice(0, 4);
  const firstTwo = num.slice(0, 2);
  const firstOne = num.slice(0, 1);

  if(num.length === 16){

    if(firstFour == '6011'){
      return 'Discover';
    }

    if(firstTwo == '51' || firstTwo == '52' || firstTwo == '53' || firstTwo == '54' || firstTwo == '55'){
      return 'Mastercard';
    }

    if(firstOne == '4'){
      return 'VISA';
    }

  } else if (num.length === 15) {

    if(firstTwo == '34' || firstTwo == '37'){
      return 'AMEX';
    }
    
  } else if(num.length === 13){

    if(firstOne == '4'){
      return 'VISA';
    }

  }
  return 'Unknown'
}

console.log('VISA ->', getIssuer(4111111111111111));
console.log('Discover ->', getIssuer(6011111111111111));
console.log('Mastercard ->', getIssuer(5511111111111111));
console.log('AMEX ->', getIssuer(378282246310005));
console.log('Unknown ->', getIssuer(9111111111111111));
console.log('Unknown ->', getIssuer(3799502937064));
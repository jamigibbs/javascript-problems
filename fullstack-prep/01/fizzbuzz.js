function fizzBuzz(num){
  if(num % 15 === 0 ) {
    return 'FizzBuzz';
  } else if (num % 3 === 0){
    return 'Fizz';
  } else if (num % 5 === 0){
    return 'Buzz';
  } else {
    return '';
  }
}


//EXAMPLE TESTS

console.log(fizzBuzz(6));
//OUTPUT: 'Fizz'

console.log(fizzBuzz(10));
//OUTPUT: 'Buzz'

console.log(fizzBuzz(15));
//OUTPUT:  'FizzBuzz'

console.log(fizzBuzz(7));
//OUTPUT: ''

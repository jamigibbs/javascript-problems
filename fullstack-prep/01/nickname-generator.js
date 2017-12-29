function nicknameGenerator(name){
  var nickname = name.split('');

  if(nickname[2] === 'a' || nickname[2] === 'e' || nickname[2] === 'i' || nickname[2] === 'o' || nickname[2] === 'u') {
    return nickname.slice(0, 4).join('');
  } else {
    return nickname.slice(0, 3).join('');
  }
}

//EXAMPLE TESTS:

console.log(nicknameGenerator('Daniel'));
//OUTPUT: 'Dan'

console.log(nicknameGenerator('Beowulf'));
//OUTPUT: 'Beow'

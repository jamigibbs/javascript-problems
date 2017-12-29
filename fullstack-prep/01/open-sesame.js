function openSesame(arr, string){
  for(var i = 0; i < arr.length; i++){
    if(string === arr[i]){
      return 'You may pass.';
    }
  }
  return 'You shall not pass!';
}

//EXAMPLE TESTS
var passwords = [
  'Password123',
  'DavidYangsMiddleName',
];

console.log(openSesame(passwords, 'Password123'));
//OUTPUT: 'You may pass.'

console.log(openSesame(passwords, 'Balrog'));
//OUTPUT: 'You shall not pass!'

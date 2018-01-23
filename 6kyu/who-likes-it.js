function likes(names) {
  var nameCount = names.length;

  // Handle singular
  var singleLike = 'likes this';
  if(nameCount == 0){ return 'no one ' + singleLike }
  if(nameCount == 1){ return names[0] + ' ' + singleLike }

  // Handle multi-user likes
  var multiLike = ' like this';
  var string = '';

  // 2 users
  if(nameCount == 2){
    return names[0] + ' and ' + names[1] + multiLike;
  }

  // 3 users
  if(nameCount == 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + multiLike;
  }

  // More than 3
  if(nameCount > 3){
    return names[0] + ', ' + names[1] + ' and ' + (nameCount - 2) + ' others' + multiLike;
  }

  return 'Invalid request';
}

console.log('no one likes this ->', likes([]));
console.log('Peter likes this ->', likes(['Peter']));
console.log('Jacob and Alex like this ->', likes(['Jacob', 'Alex']));
console.log('Max, John and Mark like this ->', likes(['Max', 'John', 'Mark']));
console.log('Alex, Jacob and 2 others like this ->', likes(['Alex', 'Jacob', 'Mark', 'Max']));

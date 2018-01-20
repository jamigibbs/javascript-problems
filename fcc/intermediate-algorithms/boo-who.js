function booWho(bool) {
  return typeof bool == 'boolean' ? true : false;
}

console.log(booWho(true));
// true

console.log(booWho(false));
// true

console.log(booWho([1, 2, 3]));
// false

console.log(booWho([].slice));
// false

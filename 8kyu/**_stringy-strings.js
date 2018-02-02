// Rescursive solution
function stringy(size, str) {
  str = str || '1';

  if(size <= 1){
    return str;
  }

  str += str.slice(-1) === '1' ? '0' : '1';
  return stringy(size - 1, str);
}

console.log('101 ->', stringy(3))
console.log('101010 ->', stringy(6))

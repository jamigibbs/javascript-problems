// Recursive approach
function simpleArraySum(n, ar) {
  let count = 0;

  for(var i = 0; i < ar.length; i++){
    count += ar[0];
    return count + simpleArraySum(n, ar.splice(1) );
  }

  return count;
}

console.log('31', simpleArraySum(6, [1,2,3,4,10,11]))

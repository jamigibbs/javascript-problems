// Recursive approach
function solve(arr, n) {

  if(arr.length == 0){
    return false;
  }

  for(var i = 0; i < arr.length; i++){
    var sum = arr[0] + arr[i + 1];
    if( sum % n == 0 || n % sum == 0 || arr[0] % n == 0) {
      return true;
    }
  }

  return solve(arr.splice(1), n);
};

console.log('false ->', solve([8,1,2,7],12));

console.log('true ->', solve([7,2,3,1,6,5],11));
console.log('true ->', solve([5,6,4,8,1],12));
console.log('true ->', solve([2,4,8],12));
console.log('true ->', solve([1,2,3,4,5],10));
console.log('true ->', solve([1,2,3,4,5],15));
console.log('true ->', solve([8,5,3,9],7));
console.log('true ->', solve([1,2,3,4,5],8));
console.log('false ->', solve([7,2,8,5],16));
console.log('false ->', solve([3,1,5,7],14));
console.log('false ->', solve([8,5,3],7));

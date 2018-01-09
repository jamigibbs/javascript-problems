function computeDepth(x){

  // Define base matches 0 - 9 and multiply vars
  var matches = [0,1,2,3,4,5,6,7,8,9]
  var multiply = 1;

  // Create a function that checks multiplied number against the matches array
  return function match(){
    // Define var for first multiplied Number
    var num = x * multiply;

    // Put each digit from number into an array and loop through them
    num.toString().split('').forEach(function(val){

      // If digit found in matches array, remove that digit from matches array
      if(matches.includes(Number(val))){
        var index = matches.indexOf(Number(val))
        matches.splice(index, 1);
      }
    })

    // Increment multiplication by 1 for next check
    multiply++;

    // Check if the matches array is empty (ie. all numbers found)
    if(matches.length === 0){
      // if yes, return the multiplication number
      return multiply - 1;
    } else {
      // if no, run the number checking function again
      return match();
    }
  }();
}

console.log(computeDepth(1));
// 10

console.log(computeDepth(42));
// 9

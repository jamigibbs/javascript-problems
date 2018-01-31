
function main(arr) {

  // Worst case is an hourglass of all -9.
  var maxSum = -9 * 7;

  // Loop through the array groups (vertical)
  for (var i = 0; i < 4; i++) {
    // Loop inside individual arrays (horizontal)
    for (var j = 0; j < 4; j++) {
      // Add up hourglass group
      var currentSum =
              // top
              arr[i][j] +
              arr[i][j+1] +
              arr[i][j+2] +
              // middle
              arr[i+1][j+1] +
              // bottom
              arr[i+2][j] +
              arr[i+2][j+1] +
              arr[i+2][j+2];

      // Compare previous max val to current max val
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

var arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]

console.log(main(arr));
// 19

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
// [3]

console.log(slasher(["burgers", "fries", "shake"], 1));
// ["fries", "shake"]

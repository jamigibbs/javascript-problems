function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  // Get keys to check
  var keys = Object.keys(source);

  // Filter the collection based on those keys as well as matching value
  arr = collection.filter(function(obj){
    // Loop through keys
    return keys.every(function(key){
      // Match keys and values
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
  })

  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Capulet"}))
// [{ first: "Tybalt", last: "Capulet" }]

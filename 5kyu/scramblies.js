function scramble(str1, str2) {
    // create object from str1 with letter counts
    let str1Obj = str1.split('').reduce((acc, curr) => {
       // Create inital key value otherwise increment
       !acc[curr] ? acc[curr] = 1 : acc[curr]++;
       return acc;
    }, {})

    // compare str2 letters to str1 obj
    for(var letter in str2){
      // Check if there's an available letter
      if(!str1Obj[str2[letter]]){
        return false;
      }
      // Decrement matching letter from obj key matched
      str1Obj[str2[letter]]--
    }

    return true;
}

console.log('true ->', scramble('rkqodlw','world'));
console.log('false ->', scramble('katas','steak'));

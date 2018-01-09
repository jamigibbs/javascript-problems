function checkExam(array1, array2){
  var score = 0;
  for(var i = 0; i < array1.length; i++){
    if(array2[i] === array1[i]){
      score += 4;
    } else if (array2[i] === ''){
      score += 0;
    } else if (array2[i] !== array1[i]){
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
}


console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
// 7
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
// 6
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
// 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));
// 0

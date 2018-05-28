function solution(roman){
  const dict = { M: 1000, CM: 900, D: 500, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  let str = roman
  let total = 0
  const checkTwo = roman[0] + roman[1]

  while (str.length > 0) {
    if (dict.hasOwnProperty(checkTwo) ) {
      total += dict[checkTwo]
      str = str.slice(2)
    } else {
      total += dict[str[0]]
      str = str.slice(1)
    }
  }

  return total
}

console.log(solution('XXI')) // 21
console.log(solution('MDCLXVI')) // 1666

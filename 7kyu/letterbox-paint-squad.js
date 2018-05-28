var paintLetterboxes = function(start, end) {
  let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  do {
    const digitsArr = ('' + start).split('')
    digitsArr.forEach((digit) => {
      digit = Number(digit)
      countArr[digit] ? countArr[digit]++ : countArr[digit] = 1
    })
    start++
  } while (start < end + 1 )

  return countArr

}

console.log(paintLetterboxes(125, 132))
// [1,9,6,3,0,1,1,1,1,1]

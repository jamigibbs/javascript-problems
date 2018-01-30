function even_or_odd(number) {
  return number % 2 == 0 ? 'Even' : "Odd";
}

console.log("Even", even_or_odd(2))
console.log("Even", even_or_odd(0))
console.log("Odd", even_or_odd(7))
console.log("Odd", even_or_odd(1))

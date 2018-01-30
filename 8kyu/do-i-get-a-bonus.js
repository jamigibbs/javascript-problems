function bonusTime(salary, bonus) {
  return bonus ? '£' + salary * 10 : '£' + salary;
}

console.log('£100000', bonusTime(10000, true));
console.log('£250000', bonusTime(25000, true));
console.log('£10000', bonusTime(10000, false));
console.log('£60000', bonusTime(60000, false));
console.log('£20', bonusTime(2, true));
console.log('£78', bonusTime(78, false));
console.log('£678900', bonusTime(67890, true));

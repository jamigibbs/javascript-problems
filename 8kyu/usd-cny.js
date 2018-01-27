function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + ' Chinese Yuan';
}

console.log('101.25 Chinese Yuan', usdcny(15));
console.log('3138.75 Chinese Yuan', usdcny(465));

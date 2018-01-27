function whoIsPaying(name){
  return name.length <= 2 ? [name] : [ name, name.slice(0, 2)  ];
}

console.log('["Mexico", "Me"]', whoIsPaying("Mexico"));
console.log('["Melania", "Me"]', whoIsPaying("Melania"));
console.log('["Melissa", "Me"]', whoIsPaying("Melissa"));
console.log('["Me"]', whoIsPaying("Me"));
console.log('[""]', whoIsPaying(""));
console.log('["I"]', whoIsPaying("I"));

function ghostBusters(building) {
  var matches = building.match(/ /i);
  return matches ? building.replace(/ /gi, '') : building;
}

console.log('Office ->', ghostBusters('O  f fi ce'));
console.log('BusStation ->', ghostBusters('BusStation'));

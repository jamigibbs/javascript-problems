function rotate(arr, steps) {
  return arr.splice(steps).concat(arr)
}

console.log('[50,60,10,20,30,40] ->', rotate([10,20,30,40,50,60], 4))

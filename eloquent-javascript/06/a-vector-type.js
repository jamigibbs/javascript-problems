class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.vector = { 'x': this.x, 'y': this.y };
  }

  plus(addVec){
    this.vector.x = this.vector.x + addVec.x;
    this.vector.y = this.vector.y + addVec.y;
    return this.vector;
  }

  minus(minusVec){
    this.vector.x = this.vector.x - minusVec.x;
    this.vector.y = this.vector.y - minusVec.y;
    return this.vector;
  }

  get length(){
    let a = this.vector.x;
    let b = this.vector.y;
    return( Math.sqrt( (a * a) + (b * b) ) );
  }
}

console.log( new Vec(1, 2).plus(new Vec(2, 3)) );
// → Vec{x: 3, y: 5}
console.log( new Vec(1, 2).minus(new Vec(2, 3)) );
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

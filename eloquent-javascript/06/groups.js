class Group {
  constructor(){
    this.members = []
  }

  // adds a value to the group (but only if it isn’t already a member)
  add(val){
    !this.has(val) ? this.members.push(val) : console.log(`The number ${val} already exists`);
  }

  // removes its argument from the group (if it was a member)
  delete(val){
    let location = this.members.indexOf(val);
    this.members.splice(location, 1);
  }

  // returns a Boolean value indicating whether its argument is a member of the group
  has(val){
    return this.members.includes(val);
  }

  // takes an iteratable object as argument and creates a
  // group that contains all the values produced by iterating over it.
  static from(arr){
    let group = new Group;
    arr.forEach(function(val){
      group.add(val)
    })
    return group;
  }

}

let group = Group.from([10, 20, 30, 40, 100]);

console.log(group.has(10));
// → true

console.log(group.has(30));
// → false

group.add(10);
group.delete(10);

console.log(group.has(10));
// → false

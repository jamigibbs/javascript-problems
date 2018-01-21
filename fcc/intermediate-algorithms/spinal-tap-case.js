function spinalCase(str){
  // First: Find all lower case letters that re next to an upper case letter
  // and add a space between them.
  // ie. sI => s I
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Second: Replace all spaces and underscore with dash and lowercase the string
  return str.replace(/\s+|_+/g, '-').toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
// this-is-spinal-tap

console.log(spinalCase("The_Andy_Griffith_Show"));
// the-andy-griffith-show

console.log(spinalCase("AllThe-small Things"));
// all-the-small-things

console.log(spinalCase("This Is Spinal Tap"));
// this-is-spinal-tap

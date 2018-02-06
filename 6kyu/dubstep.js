function songDecoder(song){
  return song.replace(/WUB/g, ' ').replace(/\s\s+/g, ' ').trim();
}

console.log('A B C ->', songDecoder("AWUBBWUBC"));
console.log('A B C ->', songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log('A B C ->', songDecoder("WUBAWUBBWUBCWUB"));

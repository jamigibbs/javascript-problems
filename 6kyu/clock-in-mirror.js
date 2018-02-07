function WhatIsTheTime(timeInMirror) {

  // Put hour and minute into array
  var time = timeInMirror.split(':');

  // Convert strings to integer
  time = [ Number(time[0]), Number(time[1]) ];

  // Convert 12 to 0 for mirror calculation
  if(time[0] == 12){
    time[0] = 0;
  }

  // Convert 0 min to 60 and decrement hour
  if(time[1] == 0){
    time[1] = 60;
    time[0] -= 1;
  }

  // Mirror calculation
  var mirror = [ (11 - time[0]), (60 - time[1]) ];

  // Convert 0 to 12
  if(mirror[0] == 0){
    mirror[0] = 12;
  }

  // Append 0 to single minute
  if(mirror[1].toString().length < 2){
    mirror[1] = '0' + mirror[1];
  }

  // Append 0 to single hour
  if(mirror[0].toString().length < 2){
    mirror[0] = '0' + mirror[0];
  }

  return mirror.join(':');
}

console.log('08:00 ->',WhatIsTheTime("04:00"));
console.log('11:58 ->',WhatIsTheTime("12:02"));
console.log('12:01 ->',WhatIsTheTime("11:59"));
console.log('05:25 ->', WhatIsTheTime("06:35"));
console.log('06:00 ->',WhatIsTheTime("06:00"));
console.log('12:00 ->',WhatIsTheTime("12:00"));

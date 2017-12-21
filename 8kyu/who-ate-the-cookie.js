function cookie(x){
  var culprit;

  if(typeof x === "string"){
    culprit = 'Zach';
  } else if (typeof x === "number"){
    culprit = 'Monica';
  } else {
    culprit = 'the dog';
  }

  return 'Who ate the last cookie? It was ' + culprit + '!';
}

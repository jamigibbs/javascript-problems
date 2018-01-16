function titleCase(str) {
  var strArr = str.toLowerCase().split(' ');

  for(var i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1);
  }

  return strArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

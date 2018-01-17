function rot13(str) { // LBH QVQ VG!
  // 26 letters
  // charCode: 65 (A) - 90 (Z)
  // From 77 (13 spaces from the front) we need to count back starting at 90

  var converted = '';

  for(var i = 0; i < str.length; i++){
    var pos = str.charCodeAt(i);

    if(pos < 65 || pos > 90){
      converted += str[i];
    } else if(pos <= 77){
      converted += String.fromCharCode( 90 - (12 - (pos - 65) ) );
    } else {
      converted += String.fromCharCode( pos - 13 );
    }
  }

  return converted;
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."))
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.

console.log(rot13("SERR CVMMN!"));
//FREE PIZZA!

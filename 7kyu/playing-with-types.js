function typing(param){
  var type = typeof param;
  var result = typeof param;

  switch(type){
    case('string'):
      result += '=' + '"' + param + '"';
      break;
    case('number'):
    case('boolean'):
    case('function'):
      result += '=' + param ;
      break;
    case('object'):
      result += '=' + JSON.stringify(param);
      break;
    case('undefined'):
      result = 'undefined';
      break;
  }

  return result;
}

console.log('object={"hello":"world"} ->', typing({ hello: 'world' }));
console.log('function=function (){return 1} ->', typing(function (){return 1}));

// console.log('number=1 ->', typing(1));
// console.log('boolean=true ->', typing(true));

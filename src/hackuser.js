var UserAuth = require('./Auth.js');

var auth = new UserAuth({
  'username': 'accdeikortuy',
  'password': 'youcrackedit'
});
var result = auth.authenticate();
if (result['status']) {
  console.log('Authentication success');
} else {
  console.log('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function hackAlgorithmToFindUsername(encrypterPass) {
array_elements=(encrypterPass.split("").sort());
    var current = null;
    var cnt = 0;
    var finalResult = new Array(array_elements.length);
    for (var i = 0; i <= array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                //console.log(current,cnt);
var div1=cnt/2;
for(j=0;j<div1;j++){finalResult.push(current);}
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
console.log('User Name :',finalResult.join(''));
}

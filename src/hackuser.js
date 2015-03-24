var UserAuth = require('./Auth.js');

var auth = new UserAuth({
	'username': '1447aaaadhiimnrrrssv',
	'password': 'sridharsivaraman1447'
});
var result = auth.authenticate();

if (result['status']) {
	console.log('Authentication success');
} else {
 	console.log('Authentication failed');
	throw new Error('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function cmp(a, b) { 
   a = a.toLowerCase();b = b.toLowerCase();
   if(a > b) 
      return 1;
   if(a < b) 
      return -1; 
   return 0;
}

function hackAlgorithmToFindUsername(encrypterPass) {
    var encrypt = (encrypterPass.split('').sort(cmp).join(''));
    var decrypt = [];
    for(var i=0;i< encrypt.length;i=i+2) {
	decrypt.push(encrypt[i]);
    }
    console.log("USERNAME:" + decrypt.join(''));
}

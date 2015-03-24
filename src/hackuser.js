var UserAuth = require('./Auth.js');

var auth = new UserAuth({
	'username': 'aaaadhiimnrrrssv',
	'password': 'sridharsivaraman'
});
var result = auth.authenticate();

if (result['status']) {
	console.log('Authentication success');
} else {
 	console.log('Authentication failed');
	throw new Error('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function hackAlgorithmToFindUsername(encrypterPass) {
    var encrypt = (encrypterPass.split('').sort().join(''));
    var decrypt = [];
    for(var i=0;i< encrypt.length;i=i+2) {
	decrypt.push(encrypt[i]);
    }
    console.log("USERNAME:" + decrypt.join(''));
}

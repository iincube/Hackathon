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
    console.log((encrypterPass.split('').sort().join('')).replace(/(.){2}/g, '$1'));
}

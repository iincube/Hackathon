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
    var result = (encrypterPass.split('').sort(cmp).join(''));
    console.log("USERNAME:" + result);
}

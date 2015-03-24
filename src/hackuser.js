var UserAuth = require('./Auth.js');

var auth = new UserAuth({
  'username': 'ahioprst',
  'password': 'paritosh'
});
var result = auth.authenticate();
if (result['status']) {
  console.log('Authentication success');
} else {
  console.log('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function hackAlgorithmToFindUsername(encrypterPass) {
	var wordCharArray = encrypterPass.split('').sort();
	var oddPositions = [];
	for (var i = 0; i < wordCharArray.length; i += 2) {
		oddPositions.push(wordCharArray[i]);
	}
	var userName = oddPositions.join('');
    console.log("User Name: " + userName);
}
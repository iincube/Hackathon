var UserAuth = require('./Auth.js');

var auth = new UserAuth({
  'username': 'esttt',
  'password': 'testt'
});
var result = auth.authenticate();
if (result['status']) {
  console.log('Authentication success');
} else {
  console.log('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function hackAlgorithmToFindUsername(encrypterPass) {
  // complete the hack to find the username for any encrypted password from authorizer.js.
	var encoded = encrypterPass.split('').sort().join('');
	var temp = 'abcdefghijklmnopqrstuvwxyz';
	var count = 0;
	var un="";
			for (i = 0; i < encoded.length; i++) { 
				for (j = 0; j < temp.length; j++) { 
							if(encoded.charAt(i)==temp.charAt(j))
							{
								count++;
								if(count%2==0)
								{	
									un = un+encoded.charAt(i);
								}
						}
			}
	}
  console.log('authenticated User Name------->'+ un);
}

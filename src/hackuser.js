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

function hackAlgorithmToFindUsername(encrypted_password) {

    console.log("ENCRYPTED PASSWORD: " + encrypted_password);

    var encrypted_array = encrypted_password.split('');

    var max_bits = 8;

    for (var d = 0; d < max_bits; ++d) {
        for (var i = 0, p = 0, b = 1 << d, n = encrypted_array.length; i < n; ++i) {
            var o = encrypted_array[i].charCodeAt(0); // GET ASCII for sorting
            if ((o & b) == 0) {
                encrypted_array.splice(p++, 0, encrypted_array.splice(i, 1)[0]);
            }
        }
    }

    var result_array = [];
    for(var i = 0; i < encrypted_array.length;i = i + 2) {
       result_array.push(encrypted_array[i]);
    }

    console.log("HACKED USERNAME: " + result_array.join(''));
    
}


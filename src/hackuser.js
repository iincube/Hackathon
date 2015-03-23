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
    // complete the hack to find the username for any encrypted password from authorizer.js.
    //console.log("encrypterPass-->" + encrypterPass);

    var a = encrypterPass.split('');
    var b = []
    var x = [];

    a.sort();
    var s = "";
    for (var i = 0; i < a.length; i++) {
          if (b.length <= 0) {
            b.push(a[i])
        } else {
            if (b.indexOf(a[i]) > -1) {
                 x.push(a[i])
                b= []
            } 
        }
    }
    console.log("Username-->"+x)

    //throw new Error("Missing hack to find username");
}

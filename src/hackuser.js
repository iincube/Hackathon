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

    //spliting value from String and converting to Array
    var valSort = encrypterPass.split('');

    //Getting unique value in Array
    uniqueArray = valSort.filter(function(elem, pos) {
        return valSort.indexOf(elem) == pos;
    });


    //Finding the username from any encrypted password
    var arr = [];
    for (var i = 0; i < uniqueArray.length; i++) {
        var count = 0;
        for (var j = 0; j < valSort.length; j++) {
            if (uniqueArray[i] == valSort[j]) {
                count = count + 1;
            }
        }
        if (count >= 2) {
            var ctr = count / 2;
            for (var z = 0; z < ctr; z++) {
                arr.push(uniqueArray[i])
            }

        }
    }
    var username = arr.sort().join('');
    console.log("username---->" + username);


   
    //throw new Error("Missing hack to find username");
}

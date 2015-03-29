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
  
   if (!encrypterPass)
          throw new Error("Missing hack to find username");
var usernameErr = encrypterPass.split("");
console.log(quickSort(usernameErr)); 

      function partition(encrypters, low, high) {
          var i = low, j = high + 1;
              while (true) {
                  while (encrypters[++i] < encrypters[low]) {
                      if (i == high) 
                          break;                      }
              while (encrypters[--j] > encrypters[low]) {
                  if (j == low) 
                      break;                      }

              if (i >= j) break;

                    var encrypter = encrypters[i];
                    encrypters[i] = encrypters[j];
                    encrypters[j] = encrypter; 
                          }
    var value = encrypters[low];
    encrypters[low] = encrypters[j];
    encrypters[j] = value;
    return j;
                                            }

    function sort(encrypters, low, high)        {
         if (low >= high) return;
             var index = partition(encrypters, low, high);
             sort(encrypters, low, index - 1);
             sort(encrypters, index + 1, high);  }

    function quickSort(encrypters) {
         sort(encrypters, 0, encrypters.length - 1);
             var username= new Array();
                  for (var k= 0; k < encrypters.length-1; k = k + 2) {
                       username.push(encrypters[k]);                 } 
                       username = username.join(""); 
    return username ; 
                                             }
}

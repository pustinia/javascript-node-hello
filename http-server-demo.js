// Make http server simply.

const http = require('http');

http.createServer(function (req,res) { // req, res are not used this example.
    console.log('client request ');
}).listen(3000);

console.log('server started...');

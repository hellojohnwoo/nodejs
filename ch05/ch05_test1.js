var http = require('http');

var server = http.createServer();

var host = '192.168.0.33';
var port = 3000;
server.listen(port, host, 50000, function () {
    console.log('Execute the WebServer : ' + host + ':' + port);
});
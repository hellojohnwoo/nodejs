var http = require('http');

var server = http.createServer();

var host = '192.168.0.33';
var port = 3000;
server.listen(port, host, 50000, function () {
    console.log('Exe WebServer');
});

server.on('connection', function (socket) {
    console.log('Connect Client');
});

server.on('requst', function (req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');

    res.writeHead(200, )

})
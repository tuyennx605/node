'use strict';

var http = require('http');

var port = 3001;
var sever = http.createServer(function (request, response) {
    // console.log(request);
    // console.log(response);
    response.write('nguyen xuan tuyens1'); //gui ve text


    response.end();
}).listen(port);
console.log('sever is running on port: ' + port);
console.log('hello');

let http = require('http');

const port = 3001;
const sever = http.createServer((request , response)=>{
    // console.log(request);
    // console.log(response);
    // response.write('nguyen xuan tuyens');   //gui ve text

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    });

    
    const ipAddress = request.socket.remoteAddress;     //
    response.write('diachi:' +ipAddress);
    response.write('url reques: ' + request.url);   //in ra param sau  dau / , sau dau ? la tham so, sau dau & la tham so tiep theo
    
    response.write(`noi dung url: ${require('url').parse(request.url, true)}`);   //parse url thanh oject
    console.log(JSON.stringify(require('url').parse(request.url, true)));   // day la url se ra objec minh co the lay cac param
    console.log(JSON.stringify(require('url').parse(request.url, true).query));
    // debugger;
    response.addTrailers({'Content-MD5':'7s9797979f7d68768768439439'});

    response.end();
}).listen(port);
console.log(`sever is running on port: ${port}`);
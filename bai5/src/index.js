const http = require('http');

const port = 3001;
const sever = http.createServer((request , response)=>{
    // console.log(request);
    // console.log(response);
    response.write('nguyen xuan tuyens1');   //gui ve text

    

    response.end();
}).listen(port);
console.log(`sever is running on port1: ${port}`);
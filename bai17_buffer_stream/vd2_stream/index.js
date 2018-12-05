// var fs = require("fs");
// var data = '';

// // Tao mot Readable Stream
// var readerStream = fs.createReadStream('nhac.mp3');

// // Thiet lap encoding la utf8. 
// readerStream.setEncoding('UTF8');

// // Xu ly cac su kien lien quan toi Stream --> data, end, va error
// readerStream.on('data', function(chunk) {
//    data += chunk;
//    console.log('------ ' + chunk);
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("Ket thuc chuong trinh");


// //ghi du lieu
// var fs = require("fs");
// var data = 'VietNamVoDoi';

// // Tao mot Writable Stream
// var writerStream = fs.createWriteStream('output.txt');

// // Ghi du lieu toi Stream theo ma hoa utf8
// writerStream.write(data,'UTF8');

// // Danh dau diem cuoi cua file (end of file)
// writerStream.end();

// // Xu ly cac su kien lien quan toi Stream --> finish, va error
// writerStream.on('finish', function() {
//     console.log("Ket thuc hoat dong ghi.");
// });

// writerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("Ket thuc chuong trinh");

//   pipe: cung cap data dau ra cho 1 stream khac
var fs = require("fs");

// Tao mot Readable Stream
var readerStream = fs.createReadStream('output.txt');

// Tao mot Writable Stream
var writerStream = fs.createWriteStream('xxx.mp3');

// Piping hoat dong Readable va Writable
// Doc du lieu tu input.txt va ghi du lieu toi output.txt
readerStream.pipe(writerStream);

console.log("Ket thuc chuong trinh");
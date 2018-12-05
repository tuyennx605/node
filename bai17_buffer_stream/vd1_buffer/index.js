// var buf = new Buffer(20);

// let tem = buf.write('qwertyuiopasdfghjklzxcvbnm1234567890', 2, 2);
// // console.log(buf.length);
// console.log(buf.toString('utf8',0  , 2));

// var buf1 = new Buffer(22);
// buf1.write('xxx');

// console.log(Buffer.concat([buf, buf1], 4).toString()); //noi 2 buffer

// so sanh 2 buffer
// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 +" dung truoc " + buffer2);
// }else if(result == 0){
//    console.log(buffer1 +" cung thu tu voi " + buffer2);
// }else {
//    console.log(buffer1 +" dung sau " + buffer2);
// }

// //copy buffer
// var buffer1 = new Buffer('ABC');
// // Sao chep mot buffer
// var buffer2 = new Buffer(3);
// buffer1.copy(buffer2, 1, 2); //bat dau va ket thuc
// // buffer2.write('haha');
// console.log("Noi dung cua buffer2 la: " + buffer2.toString());

//cat buffer
var buffer1 = new Buffer('VietNamVoDoi');
//Chia nho mot buffer
var buffer2 = buffer1.slice(0,7);
console.log("Noi dung cua buffer2 la: " + buffer2.toString());
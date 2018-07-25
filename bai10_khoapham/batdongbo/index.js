// console.log("Hello");

// setTimeout(() => {
//     console.log("vao ham!!!");
// }, 1000);

// console.log('ket thuc');


// //callback function:

// let add = (a, b, callback1)=>{
//     if(typeof a != 'number' || typeof b != 'number')
//         return callback1(new Error('khong phai la so'));
//     return callback1(undefined, a+b);
// }

// add(4, '5', (err, data)=>{
//     if(err)
//         return console.log(err+'');
//     console.log(data);
// })

// //cach co xua de khong bat dong bo:(ham long nhau)
// console.log("Hello");

// setTimeout(() => {
//     console.log("vao ham!!!");
//     console.log('ket thuc');
// }, 1000);

//promise:
// let promise1 = new Promise((resolve, reject)=>{
//     // return resolve("khong co loi");
//     reject(new Error('loi cmnr'));
// });

// promise1.then((data)=>{console.log(data)}, (err)=>{console.log(err+'')});




//trang thai promise:
// let promise1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("khong co loi");
//         console.log(promise1);
//     }, 1000);
//     // return resolve("khong co loi");
//     // reject(new Error('loi cmnr'));
// });

// console.log(promise1);

// promise1.then((data)=>{console.log(data)}, (err)=>{console.log(err+'')});




// //ung dung promise
// //  4 + 5 + 3 + 2 +3 = 17;

// let add = (a, b)=>{
//     return new Promise((resolve, reject)=>{
//         if(typeof a != 'number' || typeof b != 'number')
//             return reject(new Error('khong phai la so!!!!'));
//         resolve(a+b);
//     });
// }


// let kq = add(4, 5)
// .then((data)=>{return add(data, 3)})
// .then((data)=>{return add(data, 2)})
// .then((data)=>{return add(data, 3)});

// kq.then((data)=>{console.log(data)})
// .catch((err)=>console.log(err+""));


//async - await

// let tinhtong = async ()=>{
//     console.log("Hello");

//     // await new Promise((resolve, reject)=>{
//     //     setTimeout(() => {
//     //         console.log("vao ham!!!");
//     //         resolve();
//     //     }, 1000);
//     // });


//     // setTimeout(() => {
//     //     console.log("vao ham!!!");
//     // }, 1000);

//     console.log('ket thuc');
// }

// tinhtong();


// async-await ung dung bai tinh tong

// //  4 + 5 + 3 + 2 +3 = 17;

let add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        if(typeof a != 'number' || typeof b != 'number')
            return reject(new Error('khong phai la so!!!!'));
        resolve(a+b);
    });
}

let tinhtong = async()=>{
    try {
        let a = await add(4, 5);
        let b = await add(a, 3);
        let c = await add(b, 2);
        let d = await add(c, 3);
        console.log(d);
    } catch (error) {
        console.log(error+'');
    }
}

tinhtong();


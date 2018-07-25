// exports.ham1 = ()=> console.log('ham1');

// exports.ham2 = ()=>console.log('ham2');

//cach 2:
module.exports = {
    ham1 : ()=> console.log('ham1'),

    ham2 : ()=>console.log('ham2'),
    ham3:()=>{
        module.exports.ham1();
        module.exports.ham2();
    },
    thoigian: Date(),
    thumuc: __dirname,
    tenfile: __filename,
    ham4: ()=>{
        console.log(module.exports.thoigian);
        console.log(module.exports.thumuc);
        console.log(module.exports.tenfile);
    }
}
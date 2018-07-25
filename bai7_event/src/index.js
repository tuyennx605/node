const EventEmitter = require('events');

//cach1:

// class custommer extends EventEmitter{
//     constructor(name, gender){
//         super();
//         this.name = name;
//         this.gender = gender;
//     }
// };

// const tuyen = new custommer('tuyen', 'nam');
// const nam = new custommer('nam', 'nu');

// const callbackFunction1 = (arrthucan, ten)=>{
//     for(let i in arrthucan){
//         console.log(`${ten.name} goi ${arrthucan[i]}`);
//     }
// };

// tuyen.on('tenEvent', callbackFunction1);         //lang nghe 
// nam.on('tenEvent', callbackFunction1);

// nam.emit('tenEvent', ['banh1', 'banh2'], nam);
// tuyen.emit('tenEvent', ['xao1', 'xao2'], tuyen);


//cach2

var event1 = new EventEmitter.EventEmitter();

const callbackFunction1 = (arrthucan, ten)=>{
    for(let i in arrthucan){
        console.log(`${ten} goi ${arrthucan[i]}`);
    }
};

event1.on('tensukien', callbackFunction1);
console.log('lam gi do');
event1.emit('tensukien', ['banh1', 'banh2'], "nam");
event1.emit('tensukien', ['banh1', 'banh2'], "nam1");

// event1.on('tensukien', callbackFunction1);
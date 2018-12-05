const WebSocket = require('ws').Server;
const wss = new WebSocket({port:3000});
console.log(wss.clients.size);
wss.on('connection', (ws)=>{
    console.log(wss.clients.size);
    ws.emit('daconnec', "connect thanh cong  nhe");
    // console.log('co nguoi connect'+ JSON.stringify(Object.keys(ws)));
    ws.send("welcome!!!!");
    
    // ws.on('message',(obj) => {   
    //     console.log(`received2: ${JSON.parse(obj).name}`); 
        
    //   });
      //ws.send('something');

    ws.onclose = ()=>{
        console.log(wss.clients.size);
    }

    ws.onmessage = (msg)=>{
        console.log(msg.data);
        ws.send("welcome!!!!");
    }
});


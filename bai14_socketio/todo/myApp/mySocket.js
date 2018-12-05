
var clients = [];
const io = require('socket.io')(4000);

io.on('connection', (socket)=>{
  console.log("co nguoi ket noi");
  
  let foundClients = clients.filter(client => {
      return (client.id === socket.id);
  })
  if(foundClients.length == 0){
        console.log(`make connection with socjet id = ${socket.id}`)
        clients.push(socket);  
  }
  
  
  //kiem tra nguoi ta ngat ket noi
  socket.on("disconnect", ()=>{
    console.log('thang soket ngat ket noi: '+ socket.id);
  });

  socket.on('client-to-sever', (data)=>{
    // xu ly
    console.log(data);

    // th1: gui lai het tat ca moi nguoi ca thang nay luon:
        io.sockets.emit("gui_all", {data: "new data"});
  });
  
});
//export clients;
module.exports = {
    io, clients
}
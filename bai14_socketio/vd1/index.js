const express = require('express');
const app = express();


app.use(express.static('./public'));    //khai bao pulic la thu muc static
//cau hinh ejs
app.set("views", __dirname+"/views");
app.set('view engine', 'ejs'); // cac file co duoi ejs trong view deu dc render trong bien res


const sever = app.listen(3000, ()=>{
    console.log("ket noi sever");
});


app.get("/", (req, res)=>{
    res.render('trangchu');
});


//socketio
const io = require('socket.io')(sever);

//on: lang nghe, emit : phat ra
io.on('connection', (socket)=>{ //lang nghe nguoi ket noi
    console.log('co nguoi ket noi');
    console.log(socket.id); //socket quan ly ket noi nguoi a
    // moi socket no se co mot id khac nhau

    // console.log(socket.adapter.rooms); // tra ve json room trong sever

    //kiem tra nguoi ta ngat ket noi
    socket.on("disconnect", ()=>{
        console.log('thang soket ngat ket noi: '+ socket.id);
    });


    //lang nghe client gui
    socket.on('tenemit', (data_guilen)=>{
        console.log(data_guilen);


        //th1: gui lai het tat ca moi nguoi ca thang nay luon:
        // io.sockets.emit("gui_all", {data: data_guilen});

        //th*: gui lai cho 1 thang nao do
        // id.to('id thang kia').emit('', {}); //phai co cach luu id no lai

        //th2: gui lai cho thang do thoi:
        socket.emit('guilaino', {data: data_guilen});
        //ung dung: dang nhap, ....

        //th3: gui cho moi nguoi tru thang gui
        socket.broadcast.emit('guiall_truno', {data: data_guilen});
        // vd: thang a quang bom thang dung trong pham vi mat mau tru no    
        


        //th4: gui room theo namespace
        // note: khi khoi tao bien socket thi tao 1 room cung voi room theo id no, nghia la 1 minh no 1 room
        // co the tao room moi )(o duoi)
        io.sockets.in('ten room').emit('xxx', {data: data});
       
    });

     //tao room:
     socket.on('tao_room', (data)=>{
        // console.log(data.data);
        // console.log(socket.adapter.rooms);
        socket.join(data.data); //vao room moi
        socket.phong = data.data; //cai nay de lat nua lay ra de in ra man hinh
        // console.log(socket.adapter.rooms);
     });
});



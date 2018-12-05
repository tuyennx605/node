const express = require('express');
const app = express();
const config = require('config');


const host = config.get('sever.host');
const port = config.get('sever.port');
app.listen( port,host, ()=>{
    console.log("tao sever thanh cong o port: "+ port);
});

const routermanager = require('./apps/routes');
app.use(routermanager);

app.set("views", __dirname+"/apps/views");
app.set('view engine', 'ejs');

app.use("/static", express.static(__dirname+ "/public"));
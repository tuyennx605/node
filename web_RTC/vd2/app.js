const express = require('express');

const app = express();


app.listen(3000, ()=>{
    console.log('start sever o cong 3000');
});

app.get('/', (req, res)=>{
    // res.json({data: "data1"});
    res.render('index1');
});

app.set('views', __dirname+'/views1');
app.set('view engine', 'ejs');

app.use("/static", express.static(__dirname+ "/public"));

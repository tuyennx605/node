const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, ()=>console.log('sever start port 3000'));

app.get('/', (req, res)=>{
    res.render('home');
});

app.use("/static", express.static(__dirname+ "/public"));
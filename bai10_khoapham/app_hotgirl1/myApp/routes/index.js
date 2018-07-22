var express = require('express');
var router = express.Router();
const db = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

module.exports = router;

// db.goidb();


router.get('/:id', function(req, res, next) {
  // let id = req.params.id;
  // console.log('id la: '+ id);

  // let banghi_id = db.getDataByID(id);
  // console.log("bat dau");
  // console.log(banghi_id);
  // console.log("het11111");

  // res.render('index', { title: 'Express' });


  //    const async1 = async () => {
//       try {
//         let tblXuanTuyen = await db.query('CREATE TABLE IF NOT EXISTS "xuantuyen3" ("id"   SERIAL , "name" VARCHAR(255), "pass" INTEGER,  PRIMARY KEY("id"))');
//       console.log(`tblXuanTuyen = ${tblXuanTuyen}`);
//       let newObject =  await db.query(`INSERT INTO xuantuyen3(name, pass) VALUES('anh3', '2123'),('anh3', '2123');`);
//       console.log(`newObject = ${JSON.stringify(newObject)}`);
//       let objects = await db.query("SELECT * FROM xuantuyen3");
//       objects.forEach(object => {
//         console.log(`eachObject = ${JSON.stringify(object)}`);
//       });
//       }
//       catch(err){
//         console.log(`Error is : ${err}`);
//       }}


// const async1 = async ()=>{
//       try{
//         let id = await req.params.id;
//         console.log('id la: '+ id);

//         let banghi_id = await db.getDataByID(id);
//         await console.log("bat dau");
//         await console.log(banghi_id);
//         await console.log("het11111");

//         res.render('index', { title: 'Express' });
//         await console.log(banghi_id);

//       }catch(err){
//         console.log(`Error is : ${err}`);
//       }
//     }

//     async1();


let id = req.params.id;
db.db.query("SELECT * FROM hotgirl WHERE id = "+id).spread((results, metadata) => {
  console.log(results[0].anh);
  // return results;

  
  res.render('index', {dangxem:id, hinh : results[0].anh});
});
});


router.get('/temp/tem1', function(req, res, next) {
    console.log('vao tem');

    res.end();
});

router.post("/like/:id", function(req, res){
  var id = req.params.id;


  db.db.query('UPDATE hotgirl SET "like" = "like" + 1 WHERE id ='+id+';').spread((results, metadata) => {
      res.end();
    })

  console.log(req.body);

  var data = "";
  req.on('data', function(chunk){
  data += chunk;
  });
  console.log(data);
  req.on('end', function(){
  req.rawBody = data;
  try {
  req.body = JSON.parse(data);
  } catch(e) {}
  console.log(req.body);
  });
  console.log(data);

});


// app.use(function(req, res, next){
//   var data = "";
//   req.on('data', function(chunk){
//   data += chunk;
//   });
//   req.on('end', function(){
//   req.rawBody = data;
//   try {
//   req.body = JSON.parse(data);
//   } catch(e) {}
//   next();
//   });
//   });
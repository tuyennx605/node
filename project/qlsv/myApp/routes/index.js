var express = require('express');
var router = express.Router();
var db = require("../database/db");

/* GET home page. */
router.get('/', (req, res, next)=> {

      res.render('index', { title: 'Express' });

  
});


router.get('/qlsv', async(req, res, next)=> {
  try {
    var gtri = await db.getAlldb();
    // console.log('get');
    // console.log(gtri);
    res.render('qlsv', {data: gtri} );
} catch (error) {
    console.log(error);
}
  
});

router.put('/qlsv', (req, res, next) =>{
  console.log(req.body);
  let inser =  db.insertSV(req.body);
  res.json({
    data: "thanh cong"
  });
});

router.delete('/qlsv', function(req, res, next) {
  console.log(req.body);
  db.deleteById(req.body.id);
});
module.exports = router;

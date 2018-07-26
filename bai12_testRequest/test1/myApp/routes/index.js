var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test1', function(req, res, next) {
  res.render('index', { title: 'Express1' });
});

router.post('/test1/test', function(req, res, next) {
    console.log(req.body);
    res.json({
      data: "thanh cong"
    });
    // res.render('', {hehe});
    // res.send('hahaha');
});


module.exports = router;

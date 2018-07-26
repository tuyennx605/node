var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/dangnhap', function(req, res, next) {
  res.render('dangnhap', { title: 'dang nhap' });
});



router.get('/admin/:name', function(req, res, next) {
  res.render('admin', { title: 'dang nhap' });
});

module.exports = router;

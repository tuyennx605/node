var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/travecliend', function(req, res, next) {
  res.end('get');
});

router.post('/thembanghi', function(req, res, next) {
  res.end('post');
});

router.put('/updatebanghi', function(req, res, next) {
  res.end('put');
});

router.delete('/xoabanghi', function(req, res, next) {
  res.end('delete');
});

module.exports = router;

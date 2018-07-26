var express = require('express');
var router = express.Router();
var db = require("../databases/db");
const c_user = require('../models/m_user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/register', function(req, res, next) {
  res.render('register', {});
});

router.post('/register', function(req, res, next) {
  var user = req.body;
  console.log(user);
  // if(user.name=='' || user.email =='' || user.username=='' || user.password=='')
  // {
  //   // alert("dien  day du thong tin vao!!!!");
  //   res.render('register', {err: new Error('loi')});
  //   return;
  // }
  let user1 = new c_user.user(user.name, user.email, user.username, user.password);
  console.log(user1);
  db.insertUser(user1);
  // res.render('index', { title: 'Express' });
});



//login
router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.post('/login', async (req, res, next)=> {
  var user = req.body;

  console.log(user);

  let check = await db.checkLoggin({
    username: user.email,
    pass: user.password
  });
  console.log(check); //dang nhap thanh cong hay ko trufalse

});


module.exports = router;

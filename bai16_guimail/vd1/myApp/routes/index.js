var express = require('express');
var router = express.Router();


var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {

  const transporter =  nodemailer.createTransport({ // config mail server
    service: 'Gmail',
    auth: {
        user: 'tuyennx605@gmail.com',
        pass: 'pass'
    }
});
var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
    from: 'tuyennx605@gmail.com',     //dia chi noi gui              
    to: 'xuantuyen6593@gmail.com, unstoppable30121997@gmail.com',
    subject: 'Test1 noi dung nhe!!!!',                     //noi dung
    text: 'You recieved message from ' + "hahahahahhahahaha", //noi dung dang plance text()
    html: '<p>You have got a new message</b><ul><li>Username:' + "tuyen1 noi dung moi" + '</li><li>Email:' + "tuyen2" + '</li><li>Username:' + 'tuyen3' + '</li></ul>'
}
transporter.sendMail(mainOptions, function(err, info){
    if (err) {
        console.log(err);
        // res.redirect('/');
    } else {
        console.log('Message sent: ' +  info.response);
        // res.redirect('/');
    }
});



  res.render('index', { title: 'Express' });
});

module.exports = router;


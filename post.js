var express = require('express');  
var app = express();   
var nodemailer = require('nodemailer');  

app.use(express.static('')); 

app.use('/post',express.urlencoded({extended:true}));

app.post('/post', function(req,res){
var subiect = "";
subiect.concat(req.body.fname, ' ', req.body.lname);
var mesaj=concat(req.body.subject, '\\n Email :', req.body.semail, '\\n Country :', req.body.scountry, '\\n Telephone :', req.body.telephone);

res.send("Am trimis mail la adresa " + adresa);

var transporter = nodemailer.createTransport({   
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: ''
  }
  tls:{rejectUnauthorized:false}

});

var mailOptions = {             
  from: 'andreasmihalea@gmail.com',
  to: 'andreasmihalea@gmail.com',
  subject: subiect,
  text: mesaj
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    Alert('Form trimis. Code: ' + info.response);
  }
});

});

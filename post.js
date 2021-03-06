var express = require('express');  
var app = express();   
var nodemailer = require('nodemailer');  

app.use(express.static('')); 

app.use('/post', express.urlencoded(
        {extended:true}
));

app.post('/post', function(req, res){
	
	var subiect = 'Nume: ' + req.body.fname + 'Prenume: ' + req.body.lname; 
	subiect.concat(req.body.fname, ' ', req.body.lname);
	var mesaj = concat(req.body.subject, '\\n Email :', req.body.semail, '\\n Country :', req.body.scountry, '\\n Telephone :', req.body.telephone);
	try{
	var transporter = nodemailer.createTransport({   
	  service: 'gmail',
	  auth: {
		user: 'email@gmail.com',
		pass: ''
	  }
	  tls:{rejectUnauthorized:true}

	});
	}
	catch(err){
		Alert('Error sending email. HTML Code: ' + err.message);
	}

	var mailOptions = {             
	  from: 'andreasmihalea@gmail.com',
	  to: 'andreasmihalea@gmail.com',
	  subject: subiect,
	  text: mesaj
	};
    try{
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			Alert(error);
		}	 
	    else {
		   Alert('The form was sent. Code: ' + info.response);
	    }
	});
	}
	catch(err){
		Alert('Error sending the mail. Error details\n' + err.message);
	}

});

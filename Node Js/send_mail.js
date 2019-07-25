var http = require('http');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(
{
	service: 'gmail',
	auth: {
		  user: 'rakesh123@gmail.com',
		  pass: 'Hello@123'
	}
});

var mailOptions =
{
	from : 'rakesh123@gmail.com',
	to : 'arjun123@gmail.com',
	subject: 'sending email using node .js',
	text: 'this is sample mail'
};

transporter.sendMail(mailOptions,
function (error, info)
{
	if(error)
	{
		console.log(error);
	}
	else
	{
		console.log("email sent" + info.response);
	}
}).listen(8080);
var mysql = require('mysql');
var con = mysql.createConnection(
{
	host: "localhost",
	user: "rakesh",
	password: "hello@123",
	database: "mydb"
});

con.connect(function(err)
{
	if (err) throw err ;
	console.log("connected");
	con.query("select * from customers ORDER BY id DESC", function(err,result,fields)
	{
		if (err) throw err;
		console.log(result);
	});
});
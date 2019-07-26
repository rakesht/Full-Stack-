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
	con.query("select * from customers limit 1", function(err,result,fields)
	{
		if (err) throw err;
		console.log(result);
	});
});
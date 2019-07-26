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
	con.query("UPDATE customers SET name='Rakesh' where id=5", function(err,result,fields)
	{
		if (err) throw err;
		console.log(result.affectedRows + "records updated");
	});
});
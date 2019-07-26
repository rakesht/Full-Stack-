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
	con.query("DELETE FROM customers where address='wgl'", function(err,result,fields)
	{
		if (err) throw err;
		console.log("Number of records deleted:" + result.affectedRows);
	});
});
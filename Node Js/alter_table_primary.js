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
	var sql ="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, function(err,result)
	{
		if (err) throw err;
		console.log("Table Altered");
	});
});
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
	var sql ="INSERT INTO customers(name,address,id) VALUES('Shiva','HYD','2')";
	con.query(sql, function(err,result)
	{
		if (err) throw err;
		console.log("data created");
	});
});
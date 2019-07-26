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
	con.query("SELECT customers.name AS user, customers_primary.name AS users1 FROM customers JOIN customers_primary ON customers.id=customers_primary.id", function(err,result,fields)
	{
		if (err) throw err;
		console.log(result);
	});
});
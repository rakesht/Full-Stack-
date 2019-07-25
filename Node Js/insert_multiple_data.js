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
	var sql =" INSERT INTO customers (name,address,id) VALUES ?";
	var values =[
    ['sai','hyd','3'],
    ['harsha','wgl','4'],
    ['santhosh','chennai','5'],
    ['Abhimithra','chennai','6']
    ];
	con.query(sql,[values], function(err,result)
	{
		if (err) throw err;
		console.log("multiple records inserted", + result.affectedRows);
	});
});
var fs = require('fs');
fs.appendFile('newfile.txt', 'Hello this is append operaton in file systems',
function(err)
{
	if(err) throw err;
	console.log('saved');
});

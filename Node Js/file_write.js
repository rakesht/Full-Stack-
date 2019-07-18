var fs = require('fs');
fs.writeFile('writefile.txt', 'Hello this is update',
function(err, file)
{
	if(err) throw err;
	console.log('saved');
} 
);
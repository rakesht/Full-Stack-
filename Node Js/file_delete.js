var fs = require('fs');
fs.unlink('newfile.txt',
function(err, file)
{
	if(err) throw err;
	console.log('File deleted');
} 
);
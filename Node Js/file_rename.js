var fs = require('fs');
fs.rename('writefile.txt', 'rename.txt',
function(err, file)
{
	if(err) throw err;
	console.log('File Renamed');
} 
);
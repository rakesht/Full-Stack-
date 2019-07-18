var fs = require('fs');
var readStream = fs.createReadStream('./home.html');
readStream.on('open', function ()
{
	console.log('The file is open');
});
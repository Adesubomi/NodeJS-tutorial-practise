let fs = require('fs');

try {

	fs.unlinkSync('./sampleapp/package.json');
	console.log('File deleted :: sampleapp/package.json');
}
catch (err) {

	console.log('Unable to delete file; sampleapp/package.json');
}

fs.unlink('./notes.txt', function(err){

	if (err) {

		console.log(err);
	}
	else {
		console.log('File deleted :: notes.txt');
	}
});

var fs = require('fs');


// fs module methods have both synchronous
// versions and asynchronous versions.

fs.readdir('./lib', function(error, files){

	if (error) {
		throw error;
	}
	else {
		
		console.log(files);
	}
});

console.log("Reading file");


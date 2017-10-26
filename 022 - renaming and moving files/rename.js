var fs = require('fs');

fs.rename('./sampleapp/js-packages.js', './sampleapp/package.json', (err) => {

	if (err) {
		console.log('ERROR:: sampleapp/js-packages.js file not found!');
	}
	else {
		console.log('js-packeages.js file has been renamed to package.json');
	}
});


fs.rename('./sampleapp/notes.txt', './notes.txt', (err) => {
	
	if (err) {
		console.log('ERROR:: sampleapp/notes.txt file not found!');
	}
	else {
		console.log('notes.txt file has been moved.');
	}
});

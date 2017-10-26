let fs = require('fs');

if ( fs.existsSync('dir') ) console.log('Directory "dir" already exists');
else {

	fs.mkdir('dir', function (err) {

		if (err) {
			console.log(err);
		}
		else {
			console.log('Directory has been created!');
		}
	});
}

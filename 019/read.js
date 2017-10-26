var fs = require('fs');
var path = require('path');

fs.readdir('./lib', function (error, files) {

	if (!error) {

		files.forEach (function (fileName) {

			var file = path.join(__dirname, 'lib', fileName);

			var stats = fs.statSync(file);

			if (stats.isFile()) {


				fs.readFile(file, 'UTF-8', function (err, contents) {

					
					if (!err) {
						console.log("\x1b[35m :: "+ file);
						console.log("\x1b[37m"+ contents);
					}
				})
			}
		});
	}

});

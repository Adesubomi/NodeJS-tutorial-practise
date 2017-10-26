var fs = require('fs');

var md = `

Some Title
==========

Sample subtitle
---------------

:: no 1
:: no 2
:: no 3

`;

fs.writeFile("sample.md", md, function (err) {

	if (!err) {
		console.log("CREATED sample.md");
	}
});

console.log("Creating file with markdown!");

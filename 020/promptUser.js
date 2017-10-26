var fs = require('fs');
var path = require('path');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings: []
};


rl.question("Give a name of any real person? \n", function (answer) {
	
	realPerson.name = answer;
	let fileName = path.join(__dirname, realPerson.name +".md");

	fs.writeFileSync( fileName, `${realPerson.name}\n==========\n\n` );
	fs.appendFile( fileName, `SAYINGS\n----------\n\n`, function () {});

	rl.setPrompt(`\nWhat would ${realPerson.name} say?`);

	rl.prompt();

	rl.on('line', function (saying) {
		
		var newSaying = saying.trim();

		fs.appendFile(fileName, `* ${saying}\n`, function () {});

		if (newSaying.toLowerCase() === 'exit') {
			rl.close();
		}

		realPerson.sayings.push(newSaying);

		rl.setPrompt(`\nWhat else would ${realPerson.name} say? ('exit' to leave)`);

		rl.prompt();
	});
});


rl.on('close', function () {
	
	console.log("\n\n%s is a real person that would say :: \n%j\n", realPerson.name, realPerson.sayings);

	console.log("file has been created!");
	process.exit();

});

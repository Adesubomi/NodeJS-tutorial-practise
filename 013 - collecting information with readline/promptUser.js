var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
	name: '',
	sayings: []
};


rl.question("Give a name of any real person? \n", function (answer) {
	
	realPerson.name = answer;

	rl.setPrompt(`\nWhat would ${realPerson.name} say?`);

	rl.prompt();

	rl.on('line', function (saying) {
		
		var newSaying = saying.trim();

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

	process.exit();

	// for (var i=0; i<realPerson.sayings.length; i++) {

		// console.log(`${realPerson.name} would say ${realPerson.sayings[i]}\n`);
	// }
});

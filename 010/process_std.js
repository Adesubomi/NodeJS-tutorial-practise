var questions = [
	"What is your name?",
	"What is your favorite programming language",
];

var answers = [];

function ask(i) {
	process.stdout.write(`\n ${questions[i]} :: `);
}



process.stdin.on('data', function (data) {

	answers.push(data.toString().trim());

	if (questions.length > answers.length) {
		ask(answers.length);
	}
	else {
		process.exit();
	}
});


process.on('exit', function () {
	process.stdout.write(`\n\n Hello ${answers[0]}, I know you really love ${answers[1]} \n\n`);
});

ask(answers.length);

var sayings = [
	"Well done is better that well said",
	"The children of those you don't educate today will hunt you tomorrow",
	"Originality is the essence of scholarship. Creativity is the soul of the true scholar",
	"The greatest threat to freedom is the absence of criticism",
	"You may delay, but time will not",
	"Tell me and I forget. Teach me and I remember. Involve me and I learn",
	"Early to bed and early to rise makes a man healthy, wealthy and wise",
	"By failing to prepare, you are preparing to fail",
	"An investment in knowledge pays the best interest",
];

var interval = setInterval( function () {
	
	var i = Math.floor( Math.random() * sayings.length );
	process.stdout.write(`${sayings[i]} \n`);

}, 1000);


process.stdin.on('data', function (message) {

	process.stdout.write(`${message.toString().trim()}`);
	clearInterval(interval);

	process.exit();

});

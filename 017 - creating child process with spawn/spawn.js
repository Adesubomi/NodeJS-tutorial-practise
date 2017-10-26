var spawn = require("child_process").spawn;

var cp = spawn("node", ["alwaysTalking"]);


cp.stdout.on('data', function (data) {
	
	console.log(`STDOUT :: ${data.toString().trim()}`);
});


cp.on('close', function () {

	console.log("Child process has been closed!");
});

setTimeout( function () {

	cp.stdin.write('close');
}, 6100);

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;

function writePercentage(current, total) {

	process.stdout.clearLine();
	process.stdout.cursorTo(0);

	var percentage = Math.floor(parseInt(current)/parseInt(total) * 100);

	process.stdout.write(`wating ${percentage}%`);
}

console.log("Wait for it . . .");

var interval = setInterval(function () {

	currentTime += waitInterval;
	writePercentage(currentTime, waitTime);
}, waitInterval);


setTimeout(function () {

	writePercentage(1,1);
	console.log("\nDone!");

	clearInterval(interval);
}, waitTime);


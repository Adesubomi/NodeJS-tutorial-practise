var fs = require("fs");

fs.rmdir("./assets", function(err){

	if (err) {
		throw err;
	}
	console.log("assets directory removed");
});

fs.readdirSync("./logs").forEach( function(filename) {

	fs.unlinkSync("./logs/"+ filename);
});

fs.rmdir("./logs", function(err){

	if (err) {
		throw err;
	}
	console.log("logs directory removed");
});

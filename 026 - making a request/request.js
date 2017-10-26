var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET",
};

var fileName = "george_washington.html";

var req = https.request(options, function(res){

	var responseBody = "";
	var writeFileStream = fs.createWriteStream(fileName, "UTF-8");

	console.log("-- RESPONSE STARTED --");

	res.on("data", function(chunk) {
		writeFileStream.write(chunk);
	});

	res.on("end", function() {
		console.log("-- RESPONSE FINISHED --");
		console.log(`File written to :: ${fileName}`);
		writeFileStream.close();
	}
});

req.on("error", function(err) {
	console.log(`Problem with request: ${err.message}`);
});

var http = require("http");

var server = http.createServer(function(req, res) {
	
	res.writeHead(200, {
		"Content-Type": "text/html"
	});

	res.end(`
		<!DOCTYPE html>
		<html>
		<head>
			<title>Some HTML Content!</title>
		</head>
		<body>
			<h2>Header!</h2>
			<p>Some body of the content</p>
		</body>
		</html>
	`);
	
}).listen(3000);

console.log("SERVER LISTENING ON PORT:3000");

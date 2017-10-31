var fs = require("fs");
var http = require("http");
var path = require("path");

var server = http.createServer(function(req, res) {
	
	console.log(`${req.method} request for ${req.url}`)

	if (req.url === "/") {
		
		fs.readFile("./public/index.html", "UTF-8", function(err, content){

			res.writeHead(200, {"Content-type": "text/html"});
			res.end(content);

		});
	}
	else if (req.url.match(/.css$/)) {

		var cssPath = path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		res.writeHead(200, {"Content-type": "text/css"});
		fileStream.pipe(res);

	}
	else if (req.url.match(/.jpg$/)) {

		var imgPath = path.join(__dirname, 'public', req.url);
		var imgStream = fs.createReadStream(imgPath);
		res.writeHead(200, {"Content-type": "image/jpeg"});
		fileStream.pipe(res);

	}
	else if (req.url.match(/.png$/)) {

		var imgPath = path.join(__dirname, 'public', req.url);
		var imgStream = fs.createReadStream(imgPath);
		res.writeHead(200, {"Content-type": "image/png"});
		fileStream.pipe(res);

	}
	else if (req.url.match(/.js$/)) {

		var filePath = path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(filePath);
		res.writeHead(200, {"Content-type": "text/js"});
		fileStream.pipe(res);

	}
	else {

		res.writeHead(404, {"Content-type": "text/plain"});
		res.end("404 File Not Found.");
	}
}).listen(3000);


console.log("SERVER LISTENING ON PORT:3000");

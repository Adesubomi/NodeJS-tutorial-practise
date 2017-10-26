var path = require("path");

var variable1 = "This is a variable";

var sliced = variable1.slice(5);

console.log(`Sliced of my text :: ${sliced}`);

console.log(__dirname);
console.log(__filename);

console.log(`Show basename :: ${path.basename(__filename)}`);


function grab (flag) {
	
	var realFlag = '--'+ flag;
	var flagIndex = process.argv.indexOf(realFlag);

	return (flagIndex === -1) ? null : process.argv[flagIndex+1];
}

var greeting = grab('greeting');
var user = grab('name');

if (!user || !greeting) {
	console.log('You fucked up');
}
else {

	console.log(`Hey, ${user}. ${greeting}`);
}

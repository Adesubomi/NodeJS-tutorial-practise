var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Person = function (name) {

	this.name = name;
};


util.inherits(Person, EventEmitter);

let awolowo = new Person("Sir. Obafemi Awolowo");


awolowo.on('speak', function (saying) {

	console.log(`${this.name}:: ${saying}`);
});


awolowo.emit('speak', "The children of those you don't educate today will hunt you tomorrow");


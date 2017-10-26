var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Person = function (name) {

	this.name = name;
};


util.inherits(Person, EventEmitter);

module.exports = Person;

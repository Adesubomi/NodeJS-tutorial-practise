var Person = require('./lib/Person');

let awolowo = new Person("Sir. Obafemi Awolowo");
let nnamdi = new Person("Nnamdi Azikwe");
let soyinka = new Person("Prof. Wole Soyinka");


awolowo.on('speak', function (saying) { console.log(`${this.name} said ${saying}`); });
nnamdi.on('speak', function (saying) { console.log(`${this.name} said ${saying}`); });
soyinka.on('speak', function (saying) { console.log(`${this.name} said ${saying}`); });


awolowo.emit('speak', "The children of those you don't educate today will hunt you tomorrow.");

nnamdi.emit('speak', "Originality is the essence of scholarship. Creativity is the soul of the true scholar.");

soyinka.emit('speak', "The greatest threat to freedom is the absence of criticism.");




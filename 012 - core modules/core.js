var path = require('path');
var util = require('util');
var v8 = require('v8');

var baseName = path.basename(__filename);

var dirUploads = path.join(__dirname, 'www', 'files', 'upload');

util.log(`\n\n${dirUploads}`);

util.log(v8.getHeapStatistics());

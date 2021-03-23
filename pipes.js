var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/lorem.txt');
var writable = fs.createWriteStream(__dirname + '/lorem-pipe.txt');

readable.pipe(writable);
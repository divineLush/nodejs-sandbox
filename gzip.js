var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/lorem.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);
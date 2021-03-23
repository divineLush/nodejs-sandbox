var fs = require('fs');

// highWaterMark refers to buffer size
var readable = fs.createReadStream(__dirname + '/lorem.txt', { encoding: 'utf8', highWaterMark: 4 * 1024 });

var writable = fs.createWriteStream(__dirname + '/lorem-copy.txt');

// the stream will fill up the buffer with the contents of the file
// if the contents are the same size or smaller than the buffer
// then you'll get all the data
readable.on('data', function(chunk) {
    // console.log(chunk);
    console.log(chunk.length);
    // write chunk to the file
    writable.write(chunk);
});
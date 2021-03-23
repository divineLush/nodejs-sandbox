var fs = require('fs');

// __dirname is given by node
// refers to directory path where the code is running
// encoding is 'utf8' by default
// runs sync
// waits until the file is finished reading
// which is not that great for performance
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// Hello world
console.log(greet);

// runs async as callback was specified
var greet1 = fs.readFile(__dirname + '/greet.txt', function(err, data) {
    // this code is executed when the file is finished reading
    console.log('finished reading /greet.txt');
    // null
    console.log(err);
    // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
    console.log(data);
});

console.log(greet1);

// runs async as callback was specified
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    // Hello world
    // no buffer returned as utf8 encoding was specified
    console.log(data);
});
// 'Buffer' is available globally and works without require
// utf8 is default
// convert string to binary data using utf8 encoding
var buffer = new Buffer('Hello', 'utf8');
// <Buffer 48 65 6c 6c 6f>
console.log(buffer);
// { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buffer.toJSON());
// Hello
console.log(buffer.toString());
// 108
console.log(buffer[2]);

buffer.write('wo');
// wollo
console.log(buffer.toString());
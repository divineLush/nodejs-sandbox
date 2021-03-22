// 8 bytes
// store raw binary data
// new V8 JS feature
var buffer = new ArrayBuffer(8);
console.log(buffer);

// a way to deal with binary data in the buffer
// when I read from array, I read from buffer
var view = new Int32Array(buffer);
view[0] = 1;
view[1] = 10;
// wont throw an error
// but still wont do nothing as array buffer only holds two bytes
// view[3] = 100;
console.log(view);
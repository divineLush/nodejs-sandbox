var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Someone said hello')
});

emtr.on('greet', function() {
    console.log('A greeting occured')
});

emtr.emit('greet');

var Greeter = require('./core-emitter.js');
var grtr = new Greeter();
grtr.on('es6greet', function() {
    console.log('greeting from es6 greeter');
})

grtr.greet();

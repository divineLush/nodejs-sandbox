var EventEmitter = require('events');
var util = require('util');

function Grtr() {
    this.greeting = 'Hello world!';
}

// any object created from Grtr will also get
// all the EventEmitter properties and methods
util.inherits(Grtr, EventEmitter);

Grtr.prototype.greet = function(data) {
    console.log(this.greeting);
    console.log(data);
    this.emit('greet', data); // inherited from EventEmitter
};

var newGrtr = new Grtr();
newGrtr.on('greet', function(data) {
    console.log('greet event fired');
    console.log(data);
});

newGrtr.greet('Alex');

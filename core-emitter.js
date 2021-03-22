'use strict';

var EventEmitter = require('events');
var util = require('util');

function Grtr() {
    // EventEmitter is a function constructor
    // the super constructor (the constructor that I'm inheriting from)
    // 'EventEmitter.call(this)' ensures that any object created from
    // this construcor has everything an object created from an
    // EventEmitter would have 
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

// 'inherits' sets prototype chain
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


function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName)
}

function Policeman() {
    // Person.call(this);
    this.badgeNumber = '1234';
}

util.inherits(Policeman, Person);
var cop = new Policeman();
// Hello undefined undefined
// this happens because util.inherits only connects protorypes
// 'Person.call(this)' inside Policeman constructor would fix the issue
cop.greet();


class ES6Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);
    }
}

var john = new ES6Person('John', 'Doe');
var jane = new ES6Person('Jane', 'Doe');

// true
console.log(john.__proto__ === jane.__proto__);
// true
console.log(john.prototype === jane.prototype);

module.exports = class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world';
    }

    greet() {
        console.log(this.greeting);
        this.emit('es6greet');
    }
}
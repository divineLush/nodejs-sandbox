// js module

var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.es);
};

// greet();

// exposing greet function
module.exports = greet;

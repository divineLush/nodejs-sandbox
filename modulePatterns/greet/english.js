// js module

var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.en);
};

// greet();

// exposing greet function
module.exports = greet;

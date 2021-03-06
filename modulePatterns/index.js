// node will looj for 'index.js' file inside 'greet' folder
var greet = require('./greet');
greet.english();
greet.spanish();

var greet1 = require('./greet1');
greet1();

// also valid
// var greet2 = require('./greet2');
// greet2.greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Updateted greeting';
// Updateted greeting
greet3.greet();

var greet3b = require('./greet3');
// Updateted greeting
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();

var greet6 = require('./greet6');
// {}
console.log(greet6);

var greet7 = require('./greet7');
// {}
// Hello
greet7.greet();

// revealing module pattern
// exposing only the properties and methods you want
// via a returned object

var greeting = 'Hello world!';

function greet() {
    console.log(greeting);
}

module.exports = { greet };

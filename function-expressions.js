// function statement

function greet() {
    console.log('hi');
}

greet();

// functions are first class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hey there!');
};

greetMe();

// still first class
logGreeting(greetMe);

logGreeting(function() { console.log('Hello') });

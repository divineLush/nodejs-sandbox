// object is mutated and the reference is still valid
exports.greet = function() {
    console.log('Hello');
}

// function
console.log(exports);
// {}
console.log(module.exports);

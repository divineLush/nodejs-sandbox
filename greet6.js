exports = function() {
    console.log('Hello');
}

// now exports and module.exports point to different locations in memory
// module.exports is return from require
// since the reference is broken 'exports' will not be returned

// function
console.log(exports);
// {}
console.log(module.exports);

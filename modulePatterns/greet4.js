module.exports = function() {
    this.greeting = 'Hello world!';
    this.greet = function() {
        console.log(this.greeting);
    }
};

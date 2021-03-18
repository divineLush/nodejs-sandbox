function Emitter() {
    this.events = {};
};

Emitter.prototype.on = function(eventType, listener) {
    this.events[eventType] = this.events[eventType] || [];
    this.events[eventType].push(listener);
};

Emitter.prototype.emit = function(eventType) {
    if (this.events[eventType])
        this.events[eventType].forEach(function(listener) {
            listener();
        });
};

module.exports = Emitter;

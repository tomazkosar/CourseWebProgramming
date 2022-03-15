
var emitter = require('events').EventEmitter;

var em = new emitter();

em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

em.addListener('FirstEvent', function (data) {
    console.log('Third subscriber: ' + data);
});

em.on('SecondEvent', function (data) {  // similar 
    console.log('Second subscriber: ' + data);
});

em.emit('FirstEvent', 'First event emitter example.');

em.emit('SecondEvent', 'Second event emitter example.');


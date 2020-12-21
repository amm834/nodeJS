var EventEmitter = require('events');
var myEmitter = new EventEmitter();
myEmitter.on('getName', function() {
  console.log('Hello');
})
myEmitter.emit('getName')
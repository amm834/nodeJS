const EventEmitter = require("events");
var myEmitter = new EventEmitter();
myEmitter.on('doIt', function(action) {
  console.log(`I am doing ${action}.`)
});
myEmitter.emit('doIt', 'Homework');
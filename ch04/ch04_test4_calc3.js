var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Calc = function () {
  this.on('stop', function () {
      console.log('deliver StopEvent to Calc');
  });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function (a, b) {
  return a + b;
};

module.exports = Calc;
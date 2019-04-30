var Calc = require('./ch04_test4_calc3');

var calc1 = new Calc();
calc1.emit('stop');

console.log('deliver StopEvent to Calc');
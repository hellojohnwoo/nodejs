var calc2 = require('./calc2');
console.log('After Remove the Module - calc2.add : ' + calc2.add(11, 22));

var nconf = require('nconf');
var value = nconf.get('OS');
console.log('OS Value of Env Parameter : ' + value);
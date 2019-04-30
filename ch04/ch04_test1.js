var url = require('url');

var urlStr = '';

var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log('query -> ' + curUrl.query);


var curStr = url.format(curUrl);
console.log('url -> ' + curStr);


var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('keyword : ' + params.query);
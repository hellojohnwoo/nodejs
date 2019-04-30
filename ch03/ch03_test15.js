function add(a, b, callback) {
  var result = a + b;
  callback(result);
};

add(11, 22, function (result) {
    console.log('Result of Add (in callback function) : ' + result);
});
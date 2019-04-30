function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function () {
        count += 1;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };

    return history();
}

var add_history = add(11, 22, function (result) {
    console.log('Result of Add : ' + result);
});

console.log('Type of add_history : ' + typeof(add_history));

console.log('function Execute by result value : ' + add_history);
console.log('function Execute by result value : ' + add_history);
console.log('function Execute by result value : ' + add_history);
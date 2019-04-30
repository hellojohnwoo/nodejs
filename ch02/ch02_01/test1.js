console.log("Hello.");

console.log('Number. %d', 10);
console.log("String. ％s", "Helloo");

var person = {
    name: "BTS",
    age: 20,
};

console.log("Object of JavaScipt(JSON). %j", person);

console.dir(person);


console.time('duration_time');
var result = 0;
for (var i = 0; i < 10000; i++) {
    result += i;
}

console.timeEnd('duration_time');

console.log('File Name : %s', __filename);
console.log('pass : %s', __dirname);
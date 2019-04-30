var users = [{name : 'BTS', age:20}, {name: 'EXO', age:21}];
console.log('Number of Array Element : ' + users.length);

users.unshift({name: '2pm', age: 25});
console.log('Number of Array Element : ' + users.length);

console.dir(users);

var elem = users.shift();
console.log('Number of Array Element : ' + users.length);

console.log('3rd Element by POP');
console.dir(elem);
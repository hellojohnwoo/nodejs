var users = [{name: 'bts', age:20}, {name: 'SNSD', age:22}];
console.log('number of array element : ' + users.length);

users.push({name:'SJ', age: 28});
console.log('number of array element : ' + users.length);

var elem = users.pop();
console.log('number of array element : ' + users.length);

console.log('3rd array element by pop');
console.dir(elem);
var users = [{name: 'BTS', age:20}, {name: 'SNSD', age:22}];

var oper = function (a, b) {
    return a + b;
};

users.push(oper);

console.dir(users);
console.log('execute 3rd array factor as function : '
    + users[2](10, 10));
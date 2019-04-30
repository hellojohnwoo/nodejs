var users = [{name: 'AAA', age: 11}, {name: 'BBB', age: 22},
                {name: 'CCC', age: 33}];

delete users[1];

console.dir(users);

users.forEach(function (elem, index) {
    console.log('Element # ' + index);
    console.dir(elem)
});


users.splice(1, 0, {name: 'DDD', age: 44});
console.dir(users);

users.splice(2, 1);
console.log(users);
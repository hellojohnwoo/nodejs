var person = {};

person.name = 'BTS';
person['age'] = 20;
person.add = function (a, b) {
    return a + b;
};

console.log('add : ' + person.add(44,55));
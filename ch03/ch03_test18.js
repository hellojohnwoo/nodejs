var person1 = {name: 'AA', age: 11};
var person2 = {name: 'BB', age: 22};

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function (speed) {
    console.log(speed + 'km : waking speed');
};

var person3 = new Person('CC', 33);
var person4 = new Person('DD', 44);

person3.walk(10);
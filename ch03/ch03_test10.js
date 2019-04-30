// C style For

var users = [{name : 'BTS', age:20}, {name : 'SNSD', age:22},
    {name : 'SUPERJUNIOR', age : 21}];

for (var i = 0; i < users.length; i++){
    console.log('array element : ' + i + ' : ' + users[i].name);
}

//

users.forEach(function (elem, index) {
   console.log('array element : #' + index + ' : ' + elem.name);
});
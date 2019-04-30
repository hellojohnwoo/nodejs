console.log('argv number of parameter : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + item);
})
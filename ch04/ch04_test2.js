process.on('exit', function () {
    console.log('exit event Occur');
});

setTimeout(function () {
    console.log('After 2sec, Executed');

    process.exit();
}, 2000);

console.log('After 2sec, Will execute');
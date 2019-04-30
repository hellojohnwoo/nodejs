process.on('tick', function (count) {
    console.log('tick event Occur : ' + count);
});

setTimeout(function () {
   console.log('After 2sec, Executed');

   process.emit('tick', '2');
}, 2000);
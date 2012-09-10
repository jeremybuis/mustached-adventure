var fs = require('fs');
var bigint = require('bigint');


fs.readFile('./lib/numbers.txt', 'utf8', function(err, data) {
  if (err) throw err;

  var numberStrings = data.toString().split('\n');
  var numbers = [];

  for (var i in numberStrings) {
    numbers.push(bigint(numberStrings[i], 10));
  }

  var sum = bigint('0');

  for (var j=0; j<numbers.length; j++) {
    sum = sum.add(numbers[j]);
  }
  console.log(sum.toString(10).slice(0,10));
});
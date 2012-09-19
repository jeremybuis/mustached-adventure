var bigint = require('bigint');

function app() {

  var sum = bigint(0);

  for (var i=1; i<=1000; i++) {
    sum = sum.add(bigint(i).pow(i));
  }

  //for the lolz
  //get the string representation - split it into an array - subarray of last 10 items - join into string
  return sum.toString().split('').slice(-10).join('');
}

module.exports = app;

console.log(app());
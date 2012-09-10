var bigint = require('bigint');

var fibonacci = require('./fibonacci');

//http://stackoverflow.com/questions/554521/how-can-i-count-the-digits-in-an-integer-without-a-string-cast
//int length = (number ==0) ? 1 : (int)Math.log10(number) + 1;
function countDigits(n) {
  return (n === 0) ? 1 : log10(n) + 1;
}
//http://stackoverflow.com/questions/3019278/any-way-to-specify-the-base-of-math-log-in-javascript
function log10(val) {
  return Math.log(val) / Math.LN10;
}


function alternateCountDigits(n) {
  return n.toString().split('').length;
}

function app(digits) {
  var index = 1;
  var nextFib = fibonacci(index);
  var numDigits = alternateCountDigits(nextFib);

  while (numDigits < digits) {
    index++;
    nextFib = fibonacci(index);
    numDigits = alternateCountDigits(nextFib);

    //console.log('term: ' + index + ' number of digits: ' + numDigits);
  }

  return index;
}

module.exports = {
  countDigits: alternateCountDigits,
  log10: log10,
  fibDigitCount: app
};

//console.log(app(1000));
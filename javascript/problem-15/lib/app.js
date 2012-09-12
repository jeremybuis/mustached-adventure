//I cheated: http://joaoff.com/2008/01/20/a-square-grid-path-problem/

var bigint = require('bigint');

var factorial = require('./factorial');

function app(n) {
  var numRoutes = bigint(0);

  var nFactorial = bigint(factorial(n));

  numRoutes = bigint(factorial(2*n)) / nFactorial.mul(nFactorial);

  return numRoutes;
}

module.exports = app;

console.log(app(20));
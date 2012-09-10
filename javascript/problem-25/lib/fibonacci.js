var bigint = require('bigint');

//cant use bigint with this since it deals in real numbers - stops working at term 1475
var closedFibonacci = (function() {
  var sqrtFive = Math.sqrt(5);

  var posPhi = (1 + sqrtFive)/2;
  var negPhi = (1 - sqrtFive)/2;

  var numbers = {};
  
  return function(n) {
    if (numbers[n] === undefined || numbers[n] === null) {

      var coefficent = 1/sqrtFive;
      var firstTerm = Math.pow(posPhi, n);
      var secondTerm = Math.pow(negPhi, n);

      var number = Math.round(coefficent * (firstTerm - secondTerm));
      
      numbers[n] = number;
    }
    return numbers[n];
  };

})();

function fib(n) {
  return function(n, a, b) {
    return n>0 ? arguments.callee(n-1,b,a.add(b)) : a;
  }(n, bigint(0), bigint(1));
}

module.exports = fib;
var divisor = require('./calculate-divisors.js');

//Factor code taken from: http://www.javascripter.net/math/primes/factorization.htm

function factorByTrialDivision(n) {
  if (isNaN(n) || !isFinite(n) || n%1!==0 || n===0) return n+'';

  var minFactor = leastFactor(n);
  if (n===minFactor) return n+'';

  return minFactor + ',' + factorByTrialDivision(n/minFactor);
}

// find the least factor in n by trial division
function leastFactor(n) {
 if (isNaN(n) || !isFinite(n)) return NaN;
 if (n===0) return 0;
 if (n%1 || n*n<2) return 1;
 if (n%2===0) return 2;
 if (n%3===0) return 3;
 if (n%5===0) return 5;
 var m = Math.sqrt(n);
 for (var i=7;i<=m;i+=30) {
  if (n%i===0)      return i;
  if (n%(i+4)===0)  return i+4;
  if (n%(i+6)===0)  return i+6;
  if (n%(i+10)===0) return i+10;
  if (n%(i+12)===0) return i+12;
  if (n%(i+16)===0) return i+16;
  if (n%(i+22)===0) return i+22;
  if (n%(i+24)===0) return i+24;
 }
 return n;
}

var nextTriangleNumber = (function () {
  var currentNumber = 0;
  var currentSum = 0;

  return function() {
    currentSum += (++currentNumber);
    return currentSum;
  };
})();


// for (var i = 0; i < 8; i++) {
//   console.log(nextTriangleNumber());
// }

var currentTriangleNum = nextTriangleNumber();
//var numFactors = factorByTrialDivision(currentTriangleNum).split(',').length + 1;
var numDvisiors = divisor(currentTriangleNum).length;

//while (numFactors < 30) {
while (numDvisiors < 500) {
  currentTriangleNum = nextTriangleNumber();

  //numFactors = factorByTrialDivision(currentTriangleNum).split(',').length + 2;
  numDvisiors = divisor(currentTriangleNum).length;

  //console.log(currentTriangleNum + ': ' + numFactors);
}

console.log(currentTriangleNum);


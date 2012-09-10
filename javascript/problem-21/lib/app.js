var digits = require('./digits');

//Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n
function properDivisorSum(n) {
  if (n < 1) return 0;  //digits doesnt like trying to get the divisors of a number less than 0

  var sum = 0;
  var divisors = digits(n);

  for(var i=0; i<divisors.length; i++) {
    if (divisors[i] < n) {
      sum += parseInt(divisors[i], 10);
    }
  }

  return sum;
}

//If d(a) = b and d(b) = a, where a != b, then a and b are an amicable pair and each of a and b are called amicable numbers.
function isAmicableNumber(a) {
  var b = properDivisorSum(a);
  var properDivisorSum_b = properDivisorSum(b);

  return (a === properDivisorSum_b && a !== b) ? true : false;
}

function app() {
  var sum = 0;

  for (var i=0; i<10000; i++) {
    if (isAmicableNumber(i)) {
      sum += i;
    }
  }

  return sum;
}

//for testing
module.exports = {
  properDivisorSum: properDivisorSum,
  isAmicableNumber: isAmicableNumber
};

console.log(app());
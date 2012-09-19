var listDivisors = require('./divisors');

function factorSum(n) {
  var divisors = listDivisors(n);
  divisors = divisors.splice(0, divisors.length - 1);

  var divisorSum = 0;

  divisors.forEach(function(value, index, array) {
    divisorSum += value;
  });

  return divisorSum;
}

function isAbundant(n) {
  if (factorSum(n) > n) {
    return true;
  }
  return false;
}

//create a list of abundant numbers below and including 28123
function listAbundantNumbers() {
  var list = [];

  for (var i=1; i<=28123; i++) {
    //console.log('number: ' + i + ' - ' + isAbundant(i));
    if (isAbundant(i)) {
      list.push(i);
    }
  }

  return list;
}

//create a map of all the sum of abundant numbers
function abundantSums() {
  var seenIt = {};

  var abundantNumbers = listAbundantNumbers();

  var sum = 0;

  for (i=0; i<abundantNumbers.length; i++) {
    for (var j=0; j<abundantNumbers.length; j++) {

      sum = abundantNumbers[i] + abundantNumbers[j];

      if (seenIt[sum] !== 1) {
        seenIt[sum] = 1;
      }
    }
  }

  return seenIt;
}

function app() {

  var abundants = abundantSums();
  var sum = 0;

  for (i=1; i<=28123; i++) {
    if (abundants[i] !== 1) {
      sum += i;
    }
  }

  return sum;
}

module.exports = {
  app: app,
  factorSum: factorSum,
  isAbundant: isAbundant
};

console.log(app());
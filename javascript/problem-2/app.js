function fibonacci(n) {
  var Phi=1.6180339887498948482;
  var fibonacciNumber=0;

  fibonacciNumber=Math.pow(Phi,n)/(Math.sqrt(5));

  return Math.round(fibonacciNumber);
}

function fib(n) {
  return Math.round(Math.pow(1.6180339887498948482, n) / 2.2360679774998);
}

var term = 0;
var nextFib = fib(term);

var sum = 0;

while (nextFib < 4000000) {
  
  if (nextFib %2 === 0) {
    sum += nextFib;
  }

  term++;
  nextFib = fib(term);
}

console.log(sum);
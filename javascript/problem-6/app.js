function sumOfSquares(start, end) {
  var sum = 0;

  for (var i=start; i<=end; i++) {
    sum += Math.pow(i,2);
  }

  return sum;
}

function squareOfSums(start, end) {
  var sum = 0;

  for (var i=start; i<=end; i++) {
    sum += i;
  }

  return Math.pow(sum, 2);
}

console.log(Math.pow(sumOfSquares(1,100) - squareOfSums(1,100)));
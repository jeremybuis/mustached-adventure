function even(n) {
  return Math.floor(n/2);
}
function odd(n) {
  return n*3 + 1;
}

var maxLength = 0;
var max = 0;
var num = 0;
var chainLength = 0;

for (var i=1; i<1000000; i++) {

  num = i;
  chainLength = 0;

  while (num != 1) {
    if (num%2 === 0) {
      num = even(num);
    } else {
      num = odd(num);
    }
    chainLength++;
  }

  if (chainLength > maxLength) {
    maxLength = chainLength;
    max = i;
  }
}

console.log(max);
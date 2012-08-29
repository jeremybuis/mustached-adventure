//http://stackoverflow.com/questions/199184/how-do-i-check-if-a-number-is-a-palindrome
function isPalindrome(n) {
  var dig;
  var num = n;
  var rev = 0;

  while (num > 0) {
    dig = num % 10;
    rev = rev * 10 + dig;
    num = Math.floor(num / 10);
  }

  if (n===rev) {
    return true;
  }

  return false;
}

var max = 0;
var product = 0;

for (var i = 999; i >= 100; i--) {
  for (var j = 999; j >= 100; j--) {
    product = i*j;
    
    if (isPalindrome(product)) {
      if (max < product) {
        max = product;
      }
    }
  }
}

console.log(max);
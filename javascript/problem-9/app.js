function isPythagoreanTriplet (a, b, c) {
  if (a<b && a<c && b<c) {
    if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) {
      return true;
    }
  }
  return false;
}

var sum = 1000;
var product = 0;

for (var i=0; i<sum; i++) {
  for (var j=i+1; j<sum; j++) {
    for (var k=j+1; k<sum; k++) {

      if (i+j+k===sum && isPythagoreanTriplet(i,j,k)) {
        product = i*j*k;
      }
    }
  }
}

console.log(product);
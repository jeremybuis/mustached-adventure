//http://stackoverflow.com/questions/3959211/fast-factorial-function-in-javascript

var f = [];
function factorial(n) {

  if (n===0 || n===1) {
    return 1;
  }

  if(f[n]>0) {
    return f[n];
  } else {
    return f[n] = factorial(n-1)*n;
  }
}

module.exports = factorial;
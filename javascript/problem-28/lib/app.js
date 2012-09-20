//nxn spiral
function generateSpiral(n) {
  var spiral = new Array(n);

  for (var i=0; i<n; i++) {
    spiral[i] = new Array(n);
    for (var j=0; j<n; j++) {
      spiral[i][j] = 0;
    }
  }

  var numItems = n * n;

  var count = 1;

  var currentDirection = 'up';

  var rowRight = 0;
  var columnDown = n-1;
  var rowLeft = n-1;
  var columnUp = 0;

  var row = 0;
  var col = 0;

  while (count <= numItems) {

    if (currentDirection === 'up') {
      row = rowRight++;

      for (col=0; col<n; col++) {
        if (spiral[row][col] === 0) {
          spiral[row][col] = count++;
        }
      }

      currentDirection = 'right';
    } else if (currentDirection === 'right') {
      col = columnDown--;

      for (row=0; row<n; row++) {
        if (spiral[row][col] === 0) {
          spiral[row][col] = count++;
        }
      }

      currentDirection = 'down';
    } else if (currentDirection === 'down') {
      row = rowLeft--;

      for (col=n-1; col>=0; col--) {
        if (spiral[row][col] === 0) {
          spiral[row][col] = count++;
        }
      }

      currentDirection = 'left';
    } else if (currentDirection === 'left') {
      col = columnUp++;

      for (row=n-1; row>=0; row--) {
        if (spiral[row][col] === 0) {
          spiral[row][col] = count++;
        }
      }

      currentDirection = 'up';
    }
  }

  return spiral;
}

function app() {

  var spiral = generateSpiral(5);

  console.log(spiral);

  return 0;
}

module.exports = app;

console.log(app());
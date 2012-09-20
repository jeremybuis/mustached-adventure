/* http://ideone.com/9iL1F

void spiral_square(Array& a, int x, int y, int side, int& value)
{
  int mx = x+side-1, my=y+side-1;
  for (int i = 1; i <= side-1; ++i) a[my-i][x] = value++;
  for (int i = 1; i <= side-1; ++i) a[y][x+i] = value++;
  for (int i = 1; i <= side-1; ++i) a[y+i][mx] = value++;
  for (int i = 1; i <= side-1; ++i) a[my][mx-i] = value++;
}
  
for (int side=4;--middle>=0;side += 2) {
  spiral_square(spiral, middle, middle, side, val);
}

*/

function spiralSquare(A, x, y, side, value, numItems) {
  var mx = x + side-1;
  var my = y + side-1;

  var i;

  for (i=1; i<side && value<=numItems; ++i) {
    A[my-i][x] = value;

    value++;
  }

  for (i=1; i<side && value<=numItems; ++i) {
    A[y][x+i] = value;

    value++;
  }

  for (i=1; i<side && value<=numItems; ++i) {
    A[y+i][mx] = value;

    value++;
  }

  for (i=1; i<side && value<=numItems; ++i) {
    A[my][mx-i] = value;

    value++;
  }

  return value;
}

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
  var value = 1;
  var middle = Math.floor(n/2);

  spiral[middle][middle] = value++;
  spiral[middle][middle+1] = value++;
  spiral[middle+1][middle+1] = value++;
  spiral[middle+1][middle] = value++;

  for (var side=4; --middle>=0; side += 2) {
    value = spiralSquare(spiral, middle, middle, side, value, numItems);
  }

  // console.log(value);

  return spiral;
}

function app(n) {

  var spiral = generateSpiral(n);

  var start = 0;
  var end = spiral.length-1;

  var sum = 0;

  for (var i=0; i<spiral.length; i++) {
    sum += spiral[i][start] + spiral[i][end];
    start++;
    end--;
  }

  //one gets added twice
  sum -= 1;

  return sum;
}

module.exports = app;

console.log(app(1001));
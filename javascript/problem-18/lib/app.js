var fs = require('fs');

function cleanData(data) {
  var lines = data.split('\n');
  var line;

  var triangle = [];
  for (var i=0; i<lines.length; i++) {
    line = lines[i].split(' ');

    for (var j=0; j<line.length; j++) {
      line[j] = parseInt(line[j], 10);
    }

    triangle.push(line);
  }

  return triangle;
}

function app() {
  fs.readFile('./lib/triangle.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var triangle = cleanData(data);
    var depth = triangle.length - 2;

    while ( depth >= 0) {
      for (var j = 0; j <= depth; j++) {
        triangle[depth][j] += Math.max( triangle[depth+1][j], triangle[depth+1][j+1]);
      }
      depth -= 1;
    }
    
    console.log(triangle[0][0]);
  });
}

module.exports = app;

app();
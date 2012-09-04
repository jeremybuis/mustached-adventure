var fs = require('fs');

var alpaScore = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26
};

function nameScore(name) {
  var score = 0;

  var characters = name.split('');

  for (var i=0; i<characters.length; i++) {
    score += alpaScore[characters[i]];
  }

  return score;
}

fs.readFile('names.txt', 'utf8', function (err, data) {
  if (err) throw err;

  var list = data.split(',');

  for (var i=0; i<list.length; i++) {
    list[i] = list[i].replace('"', '').replace('"', '').toLowerCase();
  }

  list.sort();

  //console.log(list);

  var nameScores = 0;

  for (i=0; i<list.length; i++) {
    nameScores += (i+1)*nameScore(list[i]);
  }

  console.log(nameScores);
});
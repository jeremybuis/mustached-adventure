var permute = require('./permutations');

function app() {

  var list = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];

  var millionth = 1000000;
  var count = 1;  //count the first permutation

  while (count < millionth) {
    list = permute.getNextSequence(list);

    count++;
  }

  return list.join('');
}

module.exports = app;

console.log(app());
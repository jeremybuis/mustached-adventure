var numbers = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
};

var sig = {
  '10': 'ty',
  '100': 'hundred',
  '1000': 'thousand'
};

var and = 'and';
var hyphen = '-';

function numToString(num) {
  num = num + '';
  var digits = num.split('');
  var length = digits.length;
  var currentNum = 0;

  var sentence = '';

  //console.log('num:' + num + 'sentence:' + sentence);

  while (length > 0) {

    currentNum = parseInt(digits[0], 10);

    if (currentNum !== 0) {

      if (length === 1) {
        sentence += numbers[digits[0]];
      } else if (length === 2) {

        if (currentNum === 1) {
          var nextNum = parseInt(digits[1], 10);

          if (nextNum === 0) {
            sentence += 'ten';
          } else if (nextNum === 1) {
            sentence += 'eleven';
          } else if (nextNum === 2) {
            sentence += 'twelve';
          } else if (nextNum === 3) {
            sentence += 'thir' + 'teen';
          } else if (nextNum === 5) {
            sentence += 'fif' + 'teen';
          } else if (nextNum === 8) {
            sentence += 'eigh' + 'teen';
          } else {
            sentence += numbers[digits[1]] + 'teen';
          }

          break;

        } else if (currentNum === 2) {
          sentence += 'twen' + sig['10'];
        } else if (currentNum === 3) {
          sentence += 'thir' + sig['10'];
        } else if (currentNum === 5) {
          sentence += 'fif' + sig['10'];
        } else if (currentNum === 8) {
          sentence += 'eigh' + sig['10'];
        } else {
          sentence += numbers[digits[0]] + sig['10'];
        }

        //look behind for non zero following digits
        if (parseInt(digits[1], 10) !== 0) {
          //sentence += hyphen;
        }

      } else if (length === 3) {
        sentence += numbers[digits[0]] + sig['100'];

        //look behind for non zero following digits
        if (parseInt(digits[1], 10) !== 0 || parseInt(digits[2], 10)) {
          sentence += and;
        }

      } else if (length === 4) {
        sentence += numbers[digits[0]] + sig['1000'];
      }
    }

    // console.log('length:' + length + 'sentence: ' + sentence);

    digits = digits.slice(1);
    length = digits.length;
  }

  return sentence;
}

var sum = 0;

for (var i=1; i<=1000; i++) {

  sum += numToString(i).split('').length;

  //console.log(numToString(i));
}

console.log(sum);
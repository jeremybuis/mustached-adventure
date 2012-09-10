var monthNames = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var daysOfTheWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

function app() {
  var days = 0;
  var weekday = 0;

  var numSundays = 0;

  for (var year=1900; year<=2000; year++) {
    for (var month=1; month<=12; month++) {

      //to deal with leap years - TODO: rework this to be more readable
      if (month === 2) {

        if (year%4 === 0) {
          if (year%100 !== 0) {
            days = 29;
          } else if (year%400 === 0) {
            days = 29;
          } else {
            days = months[month-1];
          }
        } else {
          days = months[month-1];
        }

      } else {
        days = months[month-1];
      }

      for (var day=1; day<=days; day++) {

        if (year > 1900 && day === 1 && daysOfTheWeek[weekday] === 'sunday') {
          numSundays++;
        }
        
        weekday = (weekday + 1) % 7;
      }
    }
  }

  return numSundays;
}

module.exports = app;

console.log(app());
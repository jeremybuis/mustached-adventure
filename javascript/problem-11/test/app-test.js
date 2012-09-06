var should = require('should');

var prepData = require('../lib/app');

describe('problem 11', function() {

  describe('the function should return an array', function() {

    var data = prepData();

    should.exist(data);
  });

});
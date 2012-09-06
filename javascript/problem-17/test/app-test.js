var should = require('should');

var numToString = require('../lib/app');

describe('App - problem 17', function() {

  describe('numToString', function() {

    it ('Should return ten when given 10', function() {
      numToString(10).should.equal('ten');
    });

    it ('Should return thirteen when given 13', function() {
      numToString(13).should.equal('thirteen');
    });

    it ('Should return thirty when given 30', function() {
      numToString(30).should.equal('thirty');
    });

    it ('Should return onehundredandone when given 101', function() {
      numToString(101).should.equal('onehundredandone');
    });

    it ('Should return onethousand when given 1000', function() {
      numToString(1000).should.equal('onethousand');
    });

    it ('Should return ninetynine when given 99', function() {
      numToString(99).should.equal('ninetynine');
    });

    it ('Should return fortytwo when given 42', function() {
      numToString(42).should.equal('fortytwo');
    });

    it ('Should return fortyfour when given 44', function() {
      numToString(44).should.equal('fortyfour');
    });

    it ('Should return fourteen when given 14', function() {
      numToString(14).should.equal('fourteen');
    });

  });

});
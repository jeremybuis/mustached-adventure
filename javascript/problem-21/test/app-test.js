var should = require('should');

var app = require('../lib/app');

describe('test code!', function() {

  it('our first test-  D\'awwww', function() {
    should.exist(app);
  });

  describe('properDivisorSum function tests', function() {

    it('should return 284 for the number 220', function() {
      app.properDivisorSum(220).should.equal(284);
    });

    it('should return 220 for the number 284', function() {
      app.properDivisorSum(284).should.equal(220);
    });

  });

  describe('isAmicableNumber function tests', function() {
    
    it('should return true for 220', function() {
      app.isAmicableNumber(220).should.equal(true);
    });

    it('should return true for 284', function() {
      app.isAmicableNumber(284).should.equal(true);
    });

    it('should return false for 7', function() {
      app.isAmicableNumber(7).should.equal(false);
    });

  });

  // describe('app function tests', function() {
    
  // });

});
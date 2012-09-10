var assert = require('assert');
var should = require('should');

var app = require('../lib/app');

describe('problem 25', function() {

  it('the app should exist', function() {
    should.exist(app);
  });

  describe('tests for app validity', function() {
    
    it('should return 1 for the first 1 digit number', function() {
      //.should.equal(12);
      assert.equal(app.fibDigitCount(1), 1);
    });

    it('should return the 7th term for the first 2 digit number', function() {
      assert.equal(app.fibDigitCount(2), 7);
    });

    it('should return the 12th term for the first 3 digit number', function() {
      //.should.equal(12);
      assert.equal(app.fibDigitCount(3), 12);
    });
  });

  describe('tests for our countDigits', function() {

    it('should return 1 when given 0', function() {
      assert.equal(app.countDigits(0), 1);
    });

    it('should return 1 when given 1', function() {
      assert.equal(app.countDigits(1), 1);
    });

    it('should return 2 when given 10', function() {
      assert.equal(app.countDigits(10), 2);
    });

    it('should return 3 when given 100', function() {
      assert.equal(app.countDigits(100), 3);
    });

    it('should return 7 when given 1 000 000', function() {
      assert.equal(app.countDigits(1000000), 7);
    });

    it('should return 2 when given 34', function() {
      assert.equal(app.countDigits(34), 2);
    });

  });

  describe('tests for out log10 function', function() {

    it('should return a value one less than its length', function() {
      assert.equal(app.log10(10), 1);
    });

    it('should return a 0 given 1', function() {
      assert.equal(app.log10(1), 0);
    });

  });

});
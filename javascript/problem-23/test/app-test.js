var assert = require('assert');
var should = require('should');

var app = require('../lib/app');

describe('test code! - app', function() {

  it('our first test-  D\'awwww', function() {
    should.exist(app.app);
  });

  describe('factorSum()', function() {
    //
    it('should return the value 16 when given 12', function() {
      assert.equal(app.factorSum(12), 16);
    });

    it('should return the value 28 when given 28', function() {
      assert.equal(app.factorSum(28), 28);
    });
  });

  describe('isAbundant()', function() {
    
    it('should return true when given the value 12', function() {
      assert.equal(app.isAbundant(12), true);
    });

    it('should return false when given the value 11', function() {
      assert.equal(app.isAbundant(11), false);
    });
  });

});
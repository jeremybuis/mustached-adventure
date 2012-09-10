var assert = require('assert');
var should = require('should');

var digits = require('../lib/digits');

describe('a test of our digit counting code', function() {

  it('should return a list of digits for a given int', function() {
    assert.equal(digits(55), 4); //1, 5, 11, 55
  });

});
var assert = require('assert');
var should = require('should');

var app = require('../lib/app');

describe('test code!', function() {

  it('our first test-  D\'awwww', function() {
    should.exist(app);
  });

  it('should return 101 when given 5', function() {
    assert.equal(app(5), 101);
  });

  // describe('tests', function() {
  //   //
  // });

});
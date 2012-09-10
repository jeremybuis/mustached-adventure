var bigint = require('bigint');
var should = require('should');

var fibonacci = require('../lib/fibonacci');

describe('a test of the fibonacci number generation function', function() {

  it('should return 1 given an n of 1', function(){
    fibonacci(1).toNumber().should.equal(1);
  });

  it('should return 1 given an n of 2', function(){
    fibonacci(2).toNumber().should.equal(1);
  });

  it('should return 2 given an n of 3', function(){
    fibonacci(3).toNumber().should.equal(2);
  });

  it('should return 3 given an n of 4', function(){
    fibonacci(4).toNumber().should.equal(3);
  });

  it('should return 144 given an n of 12', function(){
    fibonacci(12).toNumber().should.equal(144);
  });

});
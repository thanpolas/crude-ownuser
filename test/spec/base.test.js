/**
 * @fileOverview Base API Surface tests.
 */
var chai = require('chai');
var expect = chai.expect;

var crudeOwnUser = require('../');

describe('Base API Surface', function() {
  it('should expose a function', function(){
    expect(crudeOwnUser).to.be.a('function');
  });
});

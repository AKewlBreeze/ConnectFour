var chai = require('chai')
var assert = chai.assert;

var Slot = require('../lib/slots');


describe('Slot', function() {

  it('should be an object', function() {
    var slot = new Slot({});
    assert.isObject(slot);
  });

  it('should accept the "x" value', function() {
    var slot = new Slot({x: 15});
    assert.equal(slot.x, 15);
  });

  it('should accept the "y" value', function() {
    var slot = new Slot({y:15});
    assert.equal(slot.y, 15);
  });

  it('should accept the "r" value', function() {
    var slot = new Slot({r: 7});
    assert.equal(slot.r, 7);
  });

  it('should accept the "sAngle" value', function() {
    var slot = new Slot({sAngle: 1});
    assert.equal(slot.sAngle, 1);
  });

  it('should accept "eAngle" value', function() {
    var slot = new Slot({eAngle: 6.283185307179586});
    assert.equal(slot.eAngle, 6.283185307179586);
  });

  it('should have a "draw()"', function() {
    var slot = new Slot({});
    assert.isFunction(slot.draw);
  });
});

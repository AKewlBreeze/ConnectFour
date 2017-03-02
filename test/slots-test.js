var chai = require('chai')
var assert = chai.assert;

var Slot = require('../lib/slots');


describe('Slot', function() {

  it('should be a object', function() {
    var slot = new Slot()
    assert.isObject(slot)
  })

  it('the first argument should be the "x" value', function() {
    var slot = new Slot(15)
    assert.equal(slot.x, 15)
  })

  it('the second argument should be the "y" value', function() {
    var slot = new Slot(15, 30)
    assert.equal(slot.y, 30)
  })

  it('the third argument should be the "r" value', function() {
    var slot = new Slot(15, 30, 37.5)
    assert.equal(slot.r, 37.5)
  })

  it('the fourth argument should be the "sAngle" value', function() {
    var slot = new Slot(15, 30, 15, 0)
    assert.equal(slot.sAngle, 0)
  })

  it('the fifth argument should be the "eAngle" value', function() {
    var slot = new Slot(15, 30, 15, 30, 6.283185307179586)
    assert.equal(slot.eAngle, 6.283185307179586)
  })

  it('should have a "draw()"', function() {
    var slot = new Slot()
    assert.isFunction(slot.draw)
  })
})

// Beef up testing, more detailed, more explicit 
//

var chai = require('chai')
var assert = chai.assert;
var Token = require('../lib/tokens')

describe('Token', function() {
  it('should be a object', function() {
    var token = new Token()
    assert.isObject(token)
  })

  it('the first argument should be the "width" value', function() {
    var token = new Token(75)
    assert.equal(token.width, 75)
  })

  it('the second argument should be the "height" value', function() {
    var token = new Token(75, 75)
    assert.equal(token.height, 75)
  })

  it('the default column should be four', function() {
    var token = new Token(75, 75, 4)
    assert.equal(token.col, 4)
  })

  it('the default row value should be 7.4125', function() {
    var token = new Token(75, 75, 4, 7.4125)
    assert.equal(token.row, 7.4125)
  })

  it('should have a default "x" value of 287', function() {
    var token = new Token(75, 75, 4, 7.4125, 287)
    assert.equal(token.x, 287)
  })

  it('should have a default "y" value of zero', function() {
    var token = new Token(75, 75, 4, 7.4125, 15, 0)
    assert.equal(token.y, 0)
  })

  it('should have a "draw()"', function() {
    var token = new Token()
    assert.isFunction(token.draw)
  })

  it('should have a "drawRed" token function', function() {
    var token = new Token()
    assert.isFunction(token.drawRed)
  })

  it('should have a "drawBlack" token function', function() {
    var token = new Token()
    assert.isFunction(token.drawBlack)
  })

  it('should have a "moveDown()"', function() {
    var token = new Token()
    assert.isFunction(token.moveDown)
  })

  it('should have a "moveLeft()"', function() {
    var token = new Token()
    assert.isFunction(token.moveLeft)
  })

  it('when you move left the column counter should decrease', function() {
    var token = new Token(4)

    token.moveLeft()
    assert.equal(token.col, 3)
  })

  it('should have a "moveRight()"', function() {
    var token = new Token()
    assert.isFunction(token.moveRight)
  })

  it('when you move left the column counter should increase', function() {
    var token = new Token(4)

    token.moveRight()
    assert.equal(token.col, 5)
  })
})

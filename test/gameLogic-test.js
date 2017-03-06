// Beef up testing, more detailed, more explicit
//

var chai = require('chai');
var assert = chai.assert;
var gameLogic = require('../lib/gameLogic');
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');
var Token = require('../lib/tokens');

// var canvas = document.body;
// var context = canvas.getContext('2d');

describe('gameLogic', function() {

it('buildSlots2 should be a function', function(){
    assert.isFunction(gameLogic.buildSlots2);
  });

it('should build a 6 by 7 grid', function (){
    assert.lengthOf(gameLogic.slots, 0);
    gameLogic.buildSlots2(context, canvas);
    assert.lengthOf(gameLogic.slots, 42);
});

it('should position slots correctly', function(){
  var slot = gameLogic.slots[0];
  assert.equal(slot.y, 550 );
  assert.equal(slot.x, 40 );
  slot = gameLogic.slots[41];
  assert.equal(slot.y, 150 );
  assert.equal(slot.x, 610 );
  slot = gameLogic.slots[20];
  assert.equal(slot.y, 390 );
  assert.equal(slot.x, 610 );
});

it('togglePlayer should be a function', function(){
  assert.isFunction(gameLogic.togglePlayer);
});

it('allTokensArray should store player token', function(){
  var currentToken = new Token ("Player One", context, canvas);
  assert.lengthOf(gameLogic.allTokensArray, 0);
  gameLogic.togglePlayer(currentToken, context, canvas);
  });

it('compareVerticle should be a function', function(){
  assert.isFunction(gameLogic.compareVerticle);
});

it('checkVerticle should be a function', function(){
  assert.isFunction(gameLogic.checkVerticle);
});

it('compareHorizontal should be a function', function(){
  assert.isFunction(gameLogic.compareHorizontal);
});

it('checkDiagonal should be a function', function(){
  assert.isFunction(gameLogic.togglePlayer);
});

it('checkLeft should be a function', function(){
  assert.isFunction(gameLogic.checkLeft);
});

it('checkRight should be a function', function(){
  assert.isFunction(gameLogic.checkRight);
});


});

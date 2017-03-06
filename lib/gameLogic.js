
var Slot = require('./slots');
var Token = require('./tokens');


var slots = [];

// function buildSlots1() {
//   var firstRow = 40;
//   var secondRow = 40;
//   var thirdRow = 40;
//   var fourthRow = 40;
//   var fifthRow = 40;
//   var sixthRow = 40;
//   for (var i = 0; i < 42; i++) {
//     if (i < 7) {
//       slots.push(new Slot(sixthRow, 550, context, canvas));
//       sixthRow += 95;
//     } else if (i < 14) {
//       slots.push(new Slot(fifthRow, 470,context, canvas));
//       fifthRow += 95;
//     } else if (i < 21) {
//       slots.push(new Slot(fourthRow, 390,context, canvas));
//       fourthRow += 95;
//     } else if (i < 28) {
//       slots.push(new Slot(thirdRow, 310,context, canvas));
//       thirdRow += 95;
//     } else if (i < 35) {
//       slots.push(new Slot(secondRow, 230,context, canvas));
//       secondRow += 95;
//     } else if (i < 42) {
//       slots.push(new Slot(firstRow, 150,context, canvas));
//       firstRow += 95;
//     }
//   }
// }

// buildSlots, operating like typewriter to bump down, and move right Building a grid last row first
function buildSlots2(context, canvas) {
  var COLUMN_COUNT = 7;
  var ROW_COUNT = 6;
  var GRID_SIZE = COLUMN_COUNT * ROW_COUNT;
  var yPos = 550;
  var xPos = 40;
  var cellHeight = 80;
  var cellWidth = 95;
  for (var i = 1; i < (GRID_SIZE + 1); i++) {
    var options = {x: xPos, y: yPos, context: context, canvas: canvas};
    slots.push(new Slot(options));
    if (i % COLUMN_COUNT === 0) {
      xPos = 40;
      yPos -= cellHeight;
    } else {
      xPos += cellWidth;
    }
  }
}


var allTokensArray = [];

  function togglePlayer(currentToken, context, canvas) {
    if(currentToken.player === "Player One") {
      var placedToken = currentToken.moveDown(currentToken, allTokensArray);
      if(placedToken) {
        allTokensArray.push(placedToken);
        return new Token("Player Two", context, canvas);
      } else {
        return new Token("Player One", context, canvas);
      }
    } else {
      var placedToken = currentToken.moveDown(currentToken, allTokensArray);
      if(placedToken) {
        allTokensArray.push(placedToken);
        return new Token("Player One", context, canvas);
      } else {
        return new Token("Player Two", context, canvas);
      }
    }
  }

  function filter(arr, str) {
    return arr.filter(function(e){
      if(e.player === str){
        return e;
      }
    });
  }

  function compareVerticle(arr, token, count){
    arr.forEach(function(e) {
      if(token.col === e.col && token.row+1 === e.row){
        count++;
        compareVerticle(arr, e, count);
        if(count === 3){
          exports.winner = e.player;
        }
      }
    });
  }

  function checkVerticle(allTokensArray, p1Array, p2Array) {

    p1Array.forEach(function(e) {
      var count = 0;
      compareVerticle(p1Array, e, count);
    });

    p2Array.forEach(function(e) {
      var count = 0;
      compareVerticle(p2Array, e, count);
    });
  }

  function compareHorizontal(arr, token, count){
    arr.forEach(function(e) {
      if(token.col+1 === e.col && token.row === e.row){
        count++;
        compareHorizontal(arr, e, count);
        if(count === 3){
          exports.winner = e.player;
        }
      }
    });
  }

  function checkHorizontal(allTokensArray, p1Array, p2Array) {

    p1Array.forEach(function(e) {
      var count = 0;
      compareHorizontal(p1Array, e, count);
    });

    p2Array.forEach(function(e) {
      var count = 0;
      compareHorizontal(p2Array, e, count);
    });
  }

  function checkDiagonal(allTokensArray, p1Array, p2Array) {
    allTokensArray.forEach(function(e) {
      var arr = e.player === "Player One" ? p1Array : p2Array;

      if(e.row < 4){
        var count = 0;
        checkLeft(arr, e, count);
        checkRight(arr, e, count);
      }
    });
  }

  function checkWinner() {
    var p1Array = filter(allTokensArray, "Player One");
    var p2Array = filter(allTokensArray, "Player Two");
    checkDiagonal(allTokensArray, p1Array, p2Array);
    checkHorizontal(allTokensArray, p1Array, p2Array);
    checkVerticle(allTokensArray, p1Array, p2Array);
  }


  function checkLeft(playerArr, playerObj, count) {
    playerArr.forEach(function(e, i) {
      if(playerObj.row+1 === e.row && playerObj.col-1 === e.col) {
          count++;
          checkLeft(playerArr, e, count);
        if(count === 3){
          exports.winner = e.player;
        }
      }
    });
  }

  function checkRight(playerArr, playerObj, count) {
    playerArr.forEach(function(e, i) {
      if(playerObj.row+1 === e.row && playerObj.col+1 === e.col) {
          count++;
          checkRight(playerArr, e, count);
        if(count === 3) {
          exports.winner = e.player;
        }
      }
  });
  }

  exports.winner = "";
  exports.slots = slots;
  exports.togglePlayer = togglePlayer;
  exports.filter = filter;
  exports.checkWinner = checkWinner;
  exports.checkDiagonal = checkDiagonal;
  exports.checkHorizontal = checkHorizontal;
  exports.checkVerticle = checkVerticle;
  exports.compareVerticle = compareVerticle;
  exports.compareHorizontal = compareHorizontal;
  exports.checkLeft = checkLeft;
  exports.checkRight = checkRight;
  exports.allTokensArray = allTokensArray;
  exports.buildSlots2 = buildSlots2;

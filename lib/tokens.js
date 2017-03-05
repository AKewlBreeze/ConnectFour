
function Token (player, context, canvas) {
  // positional - order matters
  this.width = 75;
  this.height = 75;
  this.player = player;
  this.image = new Image();
  this.col = 4;
  this.row = 7.4125;
  this.x = this.x || 287;
  this.y = 0;
  this.context = context;
  this.canvas = canvas;
  this.drawRed = this.drawColor.bind(this, 'red');
  this.drawBlack = this.drawColor.bind(this, 'black');
}


Token.prototype.draw = function() {
  if (this.player === 'Player One') {
    this.drawBlack();
  } else {
    this.drawRed();
  }
  return this;
};

Token.prototype.drawColor = function(color) {
  var colorToken = `../lib/images/${color}_marker.jpg`;
  this.image.src = colorToken;
  this.context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this;
};

// Token.prototype.moveDown = function(currentToken, allTokensArray) {
//   var colCount = 0;
//   if(!allTokensArray.length){
//     currentToken.row = 1;
//     currentToken.y = 593 - currentToken.row*80;
//   } else {
//     allTokensArray.forEach(function(e) {
//       if (currentToken.col === e.col)
//         colCount++;
//     });
//
//     if(colCount > 5){
//       return alert("invalid");
//     }
//     currentToken.row = colCount + 1;
//     currentToken.y = 593 - currentToken.row*80;
//   }
//   return currentToken;
// };

// Token.prototype.moveDown = function(currentToken, allTokensArray) {
//   var colCount = 0;
//   if(!allTokensArray.length){
//   // empty board initalize, top left corner token to btm
//     currentToken.row = 1;
//     currentToken.y = 593 - currentToken.row*80;
//   } else {
//     allTokensArray.forEach(function(token) {
//       if (currentToken.col === token.col)
//         colCount++;
//     });
// // if checking for an array length and looping through an array, handle with one function
//     if(colCount > 5){
//       return alert("invalid");
//     }
//     currentToken.row = colCount + 1;
//     currentToken.y = 593 - currentToken.row*80;
//   }
//   return currentToken;
// };


Token.prototype.moveDown = function(currentToken, allTokensArray){
  // question and answer function set-up: colCount is only available when stored in a variable
  var colCount = tokensInCol(currentToken, allTokensArray);
  currentToken.row = colCount + 1;
  currentToken.y = 593 - currentToken.row * 80;
  if (colCount > 5){
    return alert("invalid");
  }
  return currentToken;
};

function tokensInCol(currentToken, allTokensArray){
  var colCount = 0;
  allTokensArray.forEach(function(token) {
    if (currentToken.col === token.col){
      colCount++;
    }
  });
  return colCount;
}


// Breakout logic so not nesting so many if statements
// coupling: function is doing more than one thing, seperate out

Token.prototype.moveLeft = function() {
  if(this.col > 1) {
    this.col--;
  }
  if(this.x < 650 && this.x >= 85 && this.y < 85) {
    this.x-=95;
  }
};

Token.prototype.moveRight = function() {
  if(this.col < 7) {
    this.col++;
  }
  if(this.x <= 565 && this.x >= 0 && this.y < 85) {
    this.x+=95;
  }
};

module.exports = Token;

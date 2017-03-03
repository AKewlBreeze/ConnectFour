// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

function Token (player, context, canvas) {
  // positional - order matters
  this.width = 75;
  this.height = 75;
  this.player = player
  this.image = new Image();
  this.col = 4;
  this.row = 7.4125;
  this.x = this.x || 287;
  this.y = 0;
  this.context = context;
  this.canvas = canvas;
}
//
// Token.prototype.draw = function(color) {
//   this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
//   return this;
//   if (this.player === 'Player One') {
//     this.drawBlack()
//   } else {
//     this.drawRed()
//   }
// }

Token.prototype.draw = function() {
  var color = "red";
  if (this.player === 'Player One') {
    color = "black";
  }
  var colorToken = `../lib/images/${color}_marker.jpg`;
  this.image.src = colorToken;
  this.context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this;
}



// object lookup
// build one path to the color

// new function draw color
// draw color takes one argument: "color" (red/black)
// build image source with string concatenate


// Token.prototype.drawRed = function() {
//   this.image.src = '../lib/images/red_marker.jpg';
//   this.context.drawImage(this.image,this.x, this.y, this.width, this.height);
//   return this;
// };
//
// Token.prototype.drawBlack = function() {
//   this.image.src = '../lib/images/black_marker.jpg';
//   this.context.drawImage(this.image,this.x, this.y, this.width, this.height);
//   return this;
// };

// dry up drawblack/red

Token.prototype.moveDown = function(currentToken, newArray) {
  var colCount = 0;
  if(!newArray.length){
    currentToken.row = 1;
    currentToken.y = 593 - currentToken.row*80;
  } else {
    newArray.forEach(function(e) {
      if (currentToken.col === e.col)
        colCount++;
    });
    if(colCount > 5){
      return alert("invalid")
    }
    currentToken.row = colCount + 1;
    currentToken.y = 593 - currentToken.row*80;
  }
  return currentToken;
}
// Breakout logic so not nesting so many if statements
// coupling: function is doing more than one thing, seperate out

Token.prototype.moveLeft = function() {
  if(this.col > 1) {
    this.col--
  }
  if(this.x < 650 && this.x >= 85 && this.y < 85) {
    this.x-=95;
  }
};

Token.prototype.moveRight = function() {
  if(this.col < 7) {
    this.col++
  }
  if(this.x <= 565 && this.x >= 0 && this.y < 85) {
    this.x+=95;
  }
};

// dry up with a partial function

module.exports = Token;

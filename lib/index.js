var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Slot = require('./slots');
var Token = require('./tokens');
var homeScreen = document.querySelector('.home-screen');
var gameLogic = require('./gameLogic');


gameLogic.buildSlots2(context, canvas)
var currentToken = new Token("Player One", context, canvas);
var restart = document.querySelector('.restart');

homeScreen.addEventListener('click', function() {
  homeScreen.style.display = 'none';
});

restart.addEventListener('click', function() {
  document.location.reload();
});


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
      currentToken.moveLeft();
  }
  if(event.keyCode === 39) {
      currentToken.moveRight();
    }
  if(event.keyCode === 13) {
    currentToken = gameLogic.togglePlayer(currentToken, context, canvas);
    gameLogic.checkWinner();
  }
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gameLogic.slots.forEach(function(e) {
    e.draw();
  });
  currentToken.draw();
  gameLogic.allTokensArray.forEach(function(e) {
    e.draw();
  });
  if(gameLogic.winner)
    document.getElementById("winner").innerHTML = gameLogic.winner + " Wins!";
  requestAnimationFrame(gameLoop);
});

'use strict';

// ---------------------------GLOBAL VARIABLES----------------------------------

// Player lives
let hearts = 3;

// Beginning score is 0
let score = 0;

// ---------------------------GLOBAL FUNCTIONS----------------------------------

// Removes heart
function loseHeart() {
  if (hearts === 3) {
    document.querySelector('.heart3').classList.add('lose');
    hearts = 2;
  } else if (hearts === 2) {
    document.querySelector('.heart2').classList.add('lose');
    hearts = 1;
  } else if (hearts === 1) {
    document.querySelector('.heart1').classList.add('lose');
    hearts = 0;
  }
}

// Updates score by 1
function updateScore(num) {
  document.querySelector('.score-number').innerHTML = score;
  score += num;
}

/* This listens for key presses and sends the keys to the
   Player.handleInput() method. Immediately invoked. */
(function keyListener() {
  document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
})();

function gameOver() {
  allEnemies = []; // Deletes enemies
  player.handleInput = undefined; // Disables keyboard

  document.querySelector('.gameover-popup').style.display = 'flex';
  document.querySelector('.gameover-background').style.display = 'flex';
  document.querySelector('.gameover-button').addEventListener('click', function() {
    location.reload();
  });
}

// -----------------------------CLASSES-----------------------------------------

// Enemies our player must avoid
class Enemy {
  constructor() {
    this.sprite = 'images/enemy-bug.png'; // Enemy image
    this.x = Math.random() * 450;
    this.y = Math.random() * 350;
  }

  /* Update the enemy's position,
     Parameter: dt = a time delta between ticks */
  update(dt) {
    if (this.x < 500) {
      this.x += (150 * dt);
    }
    else if (this.x > 500) {
      this.reset();
    }

    // Enemy and player collision
    if (this.x < player.x + 20 && this.x + 50 > player.x && this.y < player.y + 50 && this.y + 30 > player.y) { // Source: http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/
      player.reset();
      loseHeart();
    }

    // GAME OVER
    if (hearts === 0) {
      gameOver();
    }
  }

  // Resets enemies to the left with a random y-value
  reset() {
    this.x = 0;
    this.y = Math.random() * 350;
  }

  // Draws the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Player whose goal is to cross into water
class Player {
  constructor() {
    this.sprite = 'images/char-boy.png'; // Player image
    this.x = 200;
    this.y = 400;
  }

  /* Update the player's position
     when the player reaches the water */
  update(dt) {
    if (player.y < 20) {
      player.reset();
      updateScore(1);
      document.querySelector('.score-number').innerHTML = score;
    }
  }

  // Resets player to original position if water is reached or if hit by enemy
  reset() {
    this.x = 200;
    this.y = 400;
  }

  // Draws the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Moves player based on key press
  handleInput(arrow) {
    if (arrow == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (arrow == 'right' && this.x < 400) {
        this.x += 100;
    }
    if (arrow == 'up' && this.y > 5) {
        this.y -= 95;
    }
    if(arrow == 'down' && this.y < 400) {
        this.y += 95;
    }
  }
}

// ---------------------------INSTANCIATION-------------------------------------

// Instantiated enemies and player
let allEnemies = [
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y)
];

let player = new Player();

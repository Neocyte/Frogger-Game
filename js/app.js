// ---------------------------GLOBAL VARIABLES----------------------------------

// Beginning score is 0
let score = 0;

// Updates score by 1
let updateScore = function() {
  document.querySelector('.score-number').innerHTML = score;
  score += 1;
};

/* This listens for key presses and sends the keys to the
   Player.handleInput() method. Immediately invoked. */
let keyListener = (function() {
  document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
})();

// -----------------------------Classes-----------------------------------------

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
      this.x += (100 * dt);
    }
    else if (this.x > 500) {
      this.reset();
    }

    if (this.x < player.x + 20 && this.x + 50 > player.x && this.y < player.y + 50 && this.y + 30 > player.y) { // Source: http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/
      player.reset();
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
    this.y = 420;
  }

  /* Update the enemy's position,
     Parameter: dt = a time delta between ticks */
  update(dt) {
    if (player.y < 20) {
      player.reset();
      updateScore();
      document.querySelector('.score-number').innerHTML = score;
    }
  }

  // Resets player to original position if water is reached or if hit by enemy
  reset() {
    this.x = 200;
    this.y = 420;
  }

  // Draws the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Moves player based on key press
  handleInput(arrow) {
    if (arrow == 'left' && this.x > 0) {
        this.x -= 50;
    }
    if (arrow == 'right' && this.x < 400) {
        this.x += 50;
    }
    if (arrow == 'up' && this.y > 5) {
        this.y -= 50;
    }
    if(arrow == 'down' && this.y < 400) {
        this.y += 50;
    }
  }
}

// Instantiated enemies and player
const allEnemies = [
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y),
  new Enemy(this.x, this.y)
];

const player = new Player();

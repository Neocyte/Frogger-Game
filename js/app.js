// Enemies our player must avoid
class Enemy {
  constructor(x, y) {
    this.sprite = 'images/enemy-bug.png'; // Enemy image
    this.x = x;
    this.y = y;
  }

  /* Update the enemy's position,
     Parameter: dt = a time delta between ticks */
  update(dt) {
    if (this.x < 500) {
      this.x += (100 * dt);
    } else {
      this.x = // INSERT LOWEST X VALUE OF ENEMY
    }

    if (/* INSERT COLLISION CONDITIONS */) {
      player.reset();
    }
  }

  // Draw the enemy on the screen
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

  }

  // Resets player to original position if water is reached or hit by enemy
  reset() {
    this.x = 200;
    this.y = 420;
  }

  // Draws the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Moves player based on key press
  handleInput() {

  }

}

// Instantiated enemies and player
const allEnemies = [
  new Enemy(0, 50),
  new Enemy(200, 50),
  new Enemy(300, 135),
  new Enemy(200, 215),
  new Enemy(100, 300),
  new Enemy(400, 300)
];

const player = new Player();

/* This listens for key presses and sends the keys to your
   Player.handleInput() method. */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

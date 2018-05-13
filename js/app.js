// Enemies our player must avoid
class Enemy {
  constructor(x, y) {
    this.sprite = 'images/enemy-bug.png'; // Enemy image
    this.x = x;
    this.y = y;
  }

  /* Update the enemy's position, required method for game
     Parameter: dt, a time delta between ticks */
  update(dt) {

  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}

/* Now write your own player class
   This class requires an update(), render() and
   a handleInput() method. */
class Player {
  constructor() {
    this.sprite = 'char-boy.png'; // Player image
    this.x = 150;
    this.y = 300;
  }


  update(dt) {

  }


  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }


  handleInput() {

  }

}

/* Now instantiate your objects.
   Place all enemy objects in an array called allEnemies
   Place the player object in a variable called player */
const enemy1 = new Enemy(-50, 80);
const enemy2 = new Enemy(-150, 100);
const enemy3 = new Enemy(-250, 120);
const enemy4 = new Enemy(-350, 140);
const enemy5 = new Enemy(-450, 160);
const enemy6 = new Enemy(-550, 180);

const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

const player = new Player();

/* This listens for key presses and sends the keys to your
   Player.handleInput() method. You don't need to modify this. */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

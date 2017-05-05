var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    //game.load.baseURL = 'http://examples.phaser.io/assets/';
    //game.load.crossOrigin = 'anonymous';
    game.load.image('paddle', 'assets/bat.png');
    game.load.image('ball', 'assets/ball.png');
}

function create() {
    game.stage.backgroundColor = '#3e5f96';

    // Initialize the physics system of the game
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Enable cursor keys so we can create some controls
    this.game.cursors = this.game.input.keyboard.createCursorKeys();

    this.paddle = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'paddle');
    this.paddle.pivot.y = 200;

    // Enable physics for paddle
    game.physics.arcade.enable(this.paddle);

    // Make sure the paddle won't move when hit by the ball.
    this.paddle.body.immovable = true;

    // Create the ball with physics
    this.ball = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
    game.physics.arcade.enable(this.ball);

    // Add velocity to the ball
    this.ball.body.velocity.x = 100;
    this.ball.body.velocity.y = 100;

    // Make the ball bouncy
    this.ball.body.collideWorldBounds = true;
    this.ball.body.bounce.x = 1;
    this.ball.body.bounce.y = 1;

    // Call the 'hit' function when the ball hit a brick
    //game.physics.arcade.collide(this.ball, this.bricks, this.hit, null, this);

    //ball.body.collideWorldBounds = true;
    //ball.body.bounce.set(1);

    //var multiplier = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    //ball.body.velocity.setTo(Math.random() * 200 * multiplier, Math.random() * 200 * multiplier);
}

/*hit: function(ball, brick) {
  // When the ball hits a brick, kill the brick
  brick.kill();
}*/

function update() {
    // Collision between the paddle and the ball.
    this.game.physics.arcade.collide(this.paddle, this.ball);

    if (this.game.cursors.left.isDown) {
        this.paddle.rotation -= 0.10;
    }
    if (this.game.cursors.right.isDown) {
        this.paddle.rotation += 0.10;
    }
}

function render() {
    /*game.debug.geom(new Phaser.Point(paddle1.x, paddle1.y), '#ffff00');
    game.debug.geom(new Phaser.Point(paddle.x, paddle.y), '#ffff00');
    game.debug.geom(new Phaser.Point(paddle3.x, paddle3.y), '#ffff00');
    game.debug.geom(new Phaser.Point(paddle4.x, paddle4.y), '#ffff00');*/
}

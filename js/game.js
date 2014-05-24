Drac.Game = function(game) {
    score = 0;
    lives = 0;
};

/**
 * No preload function required here as that is handled in the Drac.Loader state.
 *
 * @type {Object}
 */
Drac.Game.prototype = {
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.createFloor();
        this.player = this.game.add.sprite(32, this.game.world.height-160, 'you');
        this.game.physics.arcade.enable(this.player);

        this.player.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
        this.player.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);

        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    update: function() {

    },
    touchDrac: function() {

    },
    hitDrac: function() {

    },
    quitGame: function(){
        this.state.start('Menu');
    },
    createFloor: function(){
        // Init vector shape
        this.ground = this.game.add.graphics(0, 0);
        this.ground.lineStyle(2, 0x663300, 1);
        this.ground.beginFill(0x331900, 1);

        // Draw shape
        this.ground.drawRect(-2, this.game.world.height-20, this.game.world.width+20, 20);
        this.ground.immovable = true;
    }
};
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
        //this.createFloor();

        //MAP
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('level');
        this.layer = this.map.createLayer('Tile Layer 1');
        this.map.setCollisionBetween(1, 5);
        //this.layer.resizeWorld();

        // Player
        this.player = this.game.add.sprite(32, this.game.world.height-100, 'you');
        this.game.physics.arcade.enable(this.player);
        this.player.body.bounce.y = 0.1;
        this.player.body.gravity.y = 9.5;
        this.player.body.collideWorldBounds = true;

        this.key_space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.key_c = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        this.key_c.onDown.add(this.castSpell, this);

        this.setupAnimations();

        this.cursors = this.game.input.keyboard.createCursorKeys();

    },
    update: function() {
        this.game.physics.arcade.collide(this.player, this.ground);


        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown){
            this.player.body.velocity.x = -100;
            this.player.animations.play('left');
        }else if(this.cursors.right.isDown){
            this.player.body.velocity.x = 100;
            this.player.animations.play('right');
        }else if(this.cursors.up.isDown){
            this.player.animations.play('cast-large-right');
        }else if(this.key_c.isDown){
            this.player.animations.play('cast-large-left');
        }else{
            this.player.animations.stop();
            this.player.frame = 78;
        }
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
        this.ground.endFill();
        this.ground.enableBody = true;
        //This doesn't work - :(
        //this.ground.body.immovable = true;
    },
    setupAnimations: function() {
        // Animations
        this.player.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true); // Row J
        this.player.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true); // Row L

        this.player.animations.add('cast-small-left', [65, 66, 67, 68, 69, 70, 71, 72], 10, false); // Row F
        this.player.animations.add('cast-small-right', [91, 92, 93, 94, 95, 96, 97, 98], 10, false); // Row H

        this.player.animations.add('cast-large-left', [221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233], 10, false); // Row R
        this.player.animations.add('cast-large-right', [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259], 10, false); // Row T0

        this.player.animations.add('castout-right', [39, 40, 41, 42, 43, 44, 45], 5, false); // Row D
        this.player.animations.add('castout-left', [13, 14, 15, 16, 17, 18, 19], 5, false); // Row B

        this.player.animations.add('slash-left', [169,170, 171, 172, 173, 174, 175], 10, true); //Row N
        this.player.animations.add('slash-right', [195, 196, 197, 198, 199, 200], 10, true); // Row P

        this.player.animations.add('player-die', [260, 261, 262, 263, 264, 265], 5, false); // Row U
    },
    castSpell: function(){
        this.player.animations.stop();
        this.player.animations.play('castout-right');
    }
};
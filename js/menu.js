Drac.Menu = function(game) {};
Drac.Menu.prototype = {
    create: function() {
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.startGame, this);

        var c_key = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        c_key.onDown.add(this.credits, this);

        this.game.stage.setBackgroundColor(0x2d2d2d);

        /**
         * Tells user the button commands to use.
         * @todo replace with physical pressable buttons to enable mobile play
         * @todo use custom font for game title or use image (Google web font
         *       or bitmap font converted from bloody.ttf)
         *
         * @type object
         */
        this.startBtn = this.game.add.button(this.game.world.centerX - 95, 120, 'btn-start', this.startGame, this);
        this.helpBtn = this.game.add.button(this.game.world.centerX - 95, 200, 'btn-help', this.gameHelp, this);
        this.creditsBtn = this.game.add.button(this.game.world.centerX - 95, 280, 'btn-credits', this.credits, this);
    },
    startGame: function() {
        this.game.state.start('Game');
    },
    gameHelp: function(){
        this.game.state.start('Help');
    },
    credits: function() {
        this.game.state.start('Credits');
    }
};
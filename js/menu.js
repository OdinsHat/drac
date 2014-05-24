Drac.Menu = function(game) {};
Drac.Menu.prototype = {
    create: function() {
        this.game.stage.setBackgroundColor(0x2d2d2d);

        /**
         * Tells user the button commands to use.
         * @todo replace with physical pressable buttons to enable mobile play
         * @todo use custom font for game title or use image (Google web font
         *       or bitmap font converted from bloody.ttf)
         *
         * @type object
         */
        this.startBtn = this.game.add.button(this.game.world.centerX - 95, 120, 'btn-start', this.startGame, this, 1, 0, 0);
        this.helpBtn = this.game.add.button(this.game.world.centerX - 95, 200, 'btn-help', this.gameHelp, this, 1, 0, 0);
        this.creditsBtn = this.game.add.button(this.game.world.centerX - 95, 280, 'btn-credits', this.credits, this, 1, 0, 0);
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
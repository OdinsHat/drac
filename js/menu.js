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
        var menuText = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            "Space = Start\nC = Credits\nH = Help",
            {
                font: "30px Arial",
                fill: "#000000",
                stroke: '#ff0000',
                strokeThickness: 2
            }
        );
        menuText.align = 'center';
        menuText.anchor.set(0.5);
    },
    startGame: function() {
        this.game.state.start('Game');
    },
    credits: function() {
        this.game.state.start('Credits');
    }
};
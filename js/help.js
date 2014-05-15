Drac.Help = function(game) {};
Drac.Help.prototype = {
    create: function(){
        this.game.stage.setBackgroundColor(0x2d2d2d);

        var creditsText = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            "Help text to follow",
            {
                font: "20px Arial",
                fill: "#000000",
                strokeThickness: 1,
                align: 'left'
            }
        );
        creditsText.anchor.set(0.5);
    },
    menu: function(){
        this.game.state.start('Menu');
    }
};
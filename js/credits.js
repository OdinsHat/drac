Drac.Credits = function(game) {};
Drac.Credits.prototype = {
    /**
     * Display game credits with fire plugin.
     *
     * Can start game from here using space as on main menu.
     *
     * @return undefined
     */
    create: function() {
        this.game.stage.setBackgroundColor(0x2d2d2d);

        var creditsText = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            "Developer: Doug Bromley\nHero Character Art: Stephen Challener & Johannes Sjölund\nOther Art: To follow",
            {
                font: "20px Arial",
                fill: "#000000",
                strokeThickness: 1,
                align: 'left'
            }
        );
        creditsText.anchor.set(0.5);
    },
    start: function() {
        this.game.state.start('Game');
    }
};
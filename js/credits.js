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

    },
    start: function() {
        this.game.state.start('MainGame');
    }
}
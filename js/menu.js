Drac.Menu = function(game) {};
Drac.Menu.prototype = {
    create: function() {
        game.stage.backgroundColor = '#000000';
        // Add title text
        // Add 2 buttons

    },
    startGame: function() {
        this.game.state.start('Game');
    },
    credits: function() {
        this.game.state.start('Credits');
    }
}
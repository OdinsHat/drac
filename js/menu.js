Drac.Menu = function(game) {};
Drac.Menu.prototype = {
    create: function() {
        game.stage.backgroundColor = '#000000';

    },
    startGame: function() {
        this.game.state.start('MainGame');
    },
    credits: function() {
        this.game.state.start('Credits');
    }
}
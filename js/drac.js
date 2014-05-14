(function(){
    var game = new Phaser.Game(640, 480, Phaser.AUTO, 'drac-game');

    game.state.add('Loader', Drac.Loader);
    game.state.add('Menu', Drac.Menu);
    game.state.add('Credits', Drac.Credits);
    game.state.add('Game', Drac.Game);
    game.state.start('Menu');
})();
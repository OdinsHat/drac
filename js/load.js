var Drac = {};
Drac.Preloader = function(game) {};
Drac.Preloader.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#000000';

        // Load characters
        this.load.spritesheet('you', 'assets/yousheet.png');
        this.load.spritesheet('drac', 'assets/dracsheet.png');

        //Load UI parts
        this.load.image('button-start', 'assets/button-start.png');
        this.load.image('button-credits', 'assets/button-credits.png');

        //Load environment
        this.load.image('background', 'assets/background.jpg');
        this.load.image('ledge1', 'assets/ledge1.png');
        this.load.image('block1', 'assets/block1.png');
        this.load.image('fire', 'assets/CampFireFinished.png');

        //Load music
        this.load.audio('ghosts', ['assets/ghosts.ogg']);
    },
    create: function(){
        this.game.state.start('Menu');
    }
}
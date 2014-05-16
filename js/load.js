var Drac = {};
Drac.Loader = function(game) {};
Drac.Loader.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#000000';

        // Load characters
        this.load.spritesheet('you', 'assets/main-char.png');
        //this.load.spritesheet('drac', 'assets/dracsheet.png');

        //Load UI parts
        this.load.spritesheet('btn-start', 'assets/btn-start-sprite.png', 220, 58);
        this.load.spritesheet('btn-help', 'assets/btn-help-sprite.png', 220, 58);
        this.load.spritesheet('btn-credits', 'assets/btn-credits-sprite.png', 220, 58);

        //Load environment
        //this.load.image('background', 'assets/background.jpg');
        //this.load.image('ledge1', 'assets/ledge1.png');
        //this.load.image('block1', 'assets/block1.png');
        //this.load.image('fire', 'assets/CampFireFinished.png');

        //Load music
        //this.load.audio('ghosts', ['assets/ghosts.ogg']);
    },
    create: function(){
        this.game.state.start('Menu');
    }
};
var Drac = {};
Drac.Loader = function(game) {};
Drac.Loader.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#000000';

        // Load characters
        this.load.spritesheet('you', 'assets/main-char.png', 64, 64);
        //this.load.spritesheet('drac', 'assets/dracsheet.png');

        //Load UI parts
        this.load.spritesheet('btn-start', 'assets/btn-start-sprite.png', 220, 58);
        this.load.spritesheet('btn-help', 'assets/btn-help-sprite.png', 220, 58);
        this.load.spritesheet('btn-credits', 'assets/btn-credits-sprite.png', 220, 58);

        //Load level map
        this.game.load.tilemap('map', 'assets/levels/level1.json', null, Phaser.Tilemap.TILED_JSON);

        // Load the image 'level.png' and associate it in the cache as 'level'
        this.game.load.image('level', 'assets/levels/level.png');

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
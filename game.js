// import StartScene from './StartScene'
// import MainGameScene from './MainGameScene'
// import GameOverScene from './GameOverScene'

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [StartScene, MainGameScene, GameOverScene]
};

var game = new Phaser.Game(config);

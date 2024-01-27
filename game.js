// import StartScene from './StartScene'
// import MainGameScene from './MainGameScene'
// import GameOverScene from './GameOverScene'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [StartScene, MainGameScene, GameOverScene]
};

var game = new Phaser.Game(config);

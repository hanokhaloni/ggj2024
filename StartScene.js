class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        // Replace 'path/to/image.png' with the path to your downloaded image
        this.load.image('startLogo', 'StartGame.png');
    }

    create() {
        this.add.image(400, 300, 'startLogo');
        this.add.text(100, 100, 'Start Game', { fill: '#0f0' }).setInteractive().on('pointerdown', () => {
            this.scene.start('MainGameScene');           
        });
    }
}

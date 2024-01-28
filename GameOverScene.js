class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    preload() {
        // Load assets: Replace 'path/to/...' with actual paths to your assets
        this.load.image('gameover', 'gameover.png'); 
        this.load.audio('gameoversound', 'mixkit-dwarf-creature-laugh-420.wav'); 
    }

    create() {
        this.add.image(1000, 500, 'gameover');

        this.add.text(100, 100, 'Game Over', { fill: '#0f0' }).setInteractive().on('pointerdown', () => {
            this.scene.start('StartScene');
        });

        this.gameOverSound = this.sound.add('gameoversound');
        this.gameOverSound.play();
    }
}

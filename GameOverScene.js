class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    create() {
        this.add.text(100, 100, 'Game Over', { fill: '#0f0' }).setInteractive().on('pointerdown', () => {
            this.scene.start('StartScene');
        });
    }
}

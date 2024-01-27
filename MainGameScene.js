class MainGameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainGameScene' });
    }

    create() {
        this.add.text(100, 100, 'Main Game', { fill: '#0f0' });

        this.add.text(100, 200, 'End Game', { fill: '#f00' }).setInteractive().on('pointerdown', () => {
            this.scene.start('GameOverScene');
        });
    }
}

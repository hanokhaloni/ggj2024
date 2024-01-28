class MainGameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainGameScene' });
    }

    preload() {
        // Load assets: Replace 'path/to/...' with actual paths to your assets
        this.load.image('sprite', 'free game obstacles monster thorns.png'); 
        this.load.audio('laugh', 'mixkit-dwarf-creature-laugh-420.wav'); 
    }

    create() {
        this.sprites = []; // Array to hold sprite objects
        this.createSprites(100); // Create 10 sprites
        this.spaceCount=0;

        // Input handling
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Add laugh sound
        this.laughSound = this.sound.add('laugh');
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            this.spaceCount ++;
            this.makeSpritesFall();
        }

        if (this.spaceCount >= 10) {
            this.scene.start('GameOverScene'); 
        }

        this.sprites.forEach(sprite => {
            sprite.x += sprite.speed;
            if (sprite.x < 0 || sprite.x > this.sys.game.config.width) {
                sprite.speed *= -1; // Change direction
            }
        });
    }

    createSprites(count) {
        for (let i = 0; i < count; i++) {
            let x = Phaser.Math.Between(0, this.sys.game.config.width);
            let y = Phaser.Math.Between(0, this.sys.game.config.height);
            let speed = Phaser.Math.Between(1, 5) * (Math.random() < 0.5 ? 1 : -1);

            var width = Phaser.Math.Between(10, 200);

            let sprite = this.add.sprite(x, y, 'sprite');
            sprite.speed = speed;
            sprite.displayWidth = width;
            sprite.scaleY = sprite.scaleX;
            this.sprites.push(sprite);
        }
    }

    makeSpritesFall() {
        // Select a few random sprites to fall
        Phaser.Utils.Array.Shuffle(this.sprites).slice(0, 3).forEach(sprite => {
            sprite.speed = 0;
            this.physics.world.enable(sprite);
            sprite.body.setGravityY(300);
        });

        // Play laugh sound
        this.laughSound.play();
    }
}
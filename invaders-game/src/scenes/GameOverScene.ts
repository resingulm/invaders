import Phaser from 'phaser';

export class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    preload() {
        // Load any assets for the game over screen here
    }

    create() {
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Game Over', {
            fontSize: '64px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const restartButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Restart', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5).setInteractive();

        const quitButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, 'Quit', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5).setInteractive();

        restartButton.on('pointerdown', () => {
            this.scene.stop('GameOverScene');
            this.scene.start('GameScene');
        });

        quitButton.on('pointerdown', () => {
            window.close();
        });
    }

    update() {
        // Update logic for the game over screen here
    }
}

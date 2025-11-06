import Phaser from 'phaser';
import { GameScene } from './GameScene';

export class SplashScreenScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SplashScreenScene' });
    }

    preload() {
        this.load.image('splash', 'assets/splash.png');
    }

    create() {
        const { width, height } = this.cameras.main;
        this.add.image(width / 2, height / 2, 'splash').setDisplaySize(width, height);

        this.add.text(width / 2, height / 2, 'INVADERS', {
            fontSize: '64px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.time.delayedCall(5000, () => {
            this.scene.start('GameScene');
        }, [], this);
    }

    update() {
        // Update logic for the splash screen here
    }
}

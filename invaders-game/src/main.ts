import './style.css';
import 'phaser';
import { GameScene } from './scenes/GameScene';
import { SplashScreenScene } from './scenes/SplashScreenScene';
import { GameOverScene } from './scenes/GameOverScene';

declare const Phaser: any;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scene: [SplashScreenScene, GameScene, GameOverScene]
};

new Phaser.Game(config);

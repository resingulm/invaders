import './style.css';
import 'phaser';
import { GameScene } from './scenes/GameScene';

declare const Phaser: any;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scene: GameScene
};

new Phaser.Game(config);

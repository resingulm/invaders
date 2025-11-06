import 'phaser';

export class GameScene extends Phaser.Scene {
    private player!: Phaser.Physics.Arcade.Sprite;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private bullet: Phaser.Physics.Arcade.Sprite | null = null;
    private fireButton!: Phaser.Input.Keyboard.Key;
    private aliens!: Phaser.Physics.Arcade.Group;
    private alienVelocity: number = 100;
    private score: number = 0;
    private scoreText!: Phaser.GameObjects.Text;
    private lives: number = 3;
    private livesText!: Phaser.GameObjects.Text;
    private alienBullets!: Phaser.Physics.Arcade.Group;
    private isGameOver: boolean = false;

    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload(): void {
        this.load.image('player', 'assets/player-ship.png');
        this.load.image('alien', 'assets/alien.png');
        this.load.image('bullet', 'assets/bullet.png');
    }

    create(): void {
        this.player = this.physics.add.sprite(400, 550, 'player').setCollideWorldBounds(true);
        this.cursors = this.input.keyboard!.createCursorKeys();
        this.fireButton = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.aliens = this.physics.add.group({
            classType: Phaser.Physics.Arcade.Sprite,
        });

        this.createAliens();

        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', color: '#fff' });
        this.livesText = this.add.text(600, 16, 'Lives: 3', { fontSize: '32px', color: '#fff' });

        this.alienBullets = this.physics.add.group();
        this.time.addEvent({
            delay: 2000,
            callback: () => {
                if (this.isGameOver) return;
                const randomAlien = Phaser.Utils.Array.GetRandom(this.aliens.getChildren()) as Phaser.Physics.Arcade.Sprite;
                if (randomAlien) {
                    const bullet = this.alienBullets.create(randomAlien.x, randomAlien.y, 'bullet');
                    bullet.setVelocityY(200);
                }
            },
            loop: true
        });

        this.physics.add.collider(this.player, this.alienBullets, (_player, bullet) => {
            void _player;
            bullet.destroy();
            this.lives--;
            this.livesText.setText('Lives: ' + this.lives);
            if (this.lives === 0) {
                this.gameOver();
            }
        });

        this.physics.add.collider(this.aliens, this.aliens);
    }

    update(): void {
        if (this.isGameOver) return;

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.fireButton.isDown && !this.bullet) {
            this.bullet = this.physics.add.sprite(this.player.x, this.player.y, 'bullet');
            this.bullet.setVelocityY(-300);
            this.physics.add.collider(this.bullet, this.aliens, (bullet, alien) => {
                bullet.destroy();
                alien.destroy();
                this.bullet = null;
                this.score += 10;
                this.scoreText.setText('Score: ' + this.score);
            });
        }

        if (this.bullet && this.bullet.y < 0) {
            this.bullet.destroy();
            this.bullet = null;
        }

        this.checkAlienPosition();

        if (this.aliens.countActive(true) === 0) {
            this.alienVelocity += 50;
            this.createAliens();
        }
    }

    private createAliens(): void {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const alien = this.aliens.create(100 + i * 70, 100 + j * 50, 'alien');
                alien.setCollideWorldBounds(true);
                alien.setScale(0.5); // Make aliens smaller to prevent overlap
            }
        }
        this.aliens.setVelocityX(this.alienVelocity);
    }

    private checkAlienPosition(): void {
        let moveDown = false;
        (this.aliens.getChildren() as Phaser.Physics.Arcade.Sprite[]).forEach((alien) => {
            if (!alien.body) return;
            const body = alien.body as Phaser.Physics.Arcade.Body;
            if (body.right > this.physics.world.bounds.width || body.left < 0) {
                moveDown = true;
            }
            if (alien.y > 500) {
                this.gameOver();
            }
        });

        if (moveDown) {
            this.alienVelocity *= -1;
            this.aliens.setVelocityX(this.alienVelocity);
            (this.aliens.getChildren() as Phaser.Physics.Arcade.Sprite[]).forEach((alien) => {
                alien.y += 10;
            });
        }
    }

    private gameOver(): void {
        if (this.isGameOver) return;
        this.isGameOver = true;
        this.physics.pause();
        this.add.text(400, 300, 'Game Over', { fontSize: '64px', color: '#fff' }).setOrigin(0.5);
    }
}

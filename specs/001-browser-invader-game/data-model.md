# Data Model: Invader Game

This document outlines the key data entities for the game.

## GameState

Represents the overall state of the game.

- `score`: number - The player's current score.
- `level`: number - The current level number.
- `lives`: number - The number of lives the player has remaining.
- `isGameOver`: boolean - Flag to indicate if the game is over.
- `isPaused`: boolean - Flag to indicate if the game is paused.

## Player

Represents the player's spaceship.

- `sprite`: Phaser.Physics.Arcade.Sprite - The visual representation and physics body of the ship.
- `speed`: number - The horizontal movement speed of the ship.

## Alien

Represents a single alien invader.

- `sprite`: Phaser.Physics.Arcade.Sprite - The visual representation and physics body of the alien.
- `type`: string - The type of alien (e.g., 'squid', 'crab', 'octopus'), which could affect points or behavior.
- `scoreValue`: number - The number of points awarded for destroying this alien.

## Projectile

Represents a projectile fired by the player or an alien.

- `sprite`: Phaser.Physics.Arcade.Sprite - The visual representation and physics body of the projectile.
- `speed`: number - The vertical speed of the projectile.
- `isPlayerProjectile`: boolean - True if fired by the player, false if fired by an alien.

## AlienGroup

Represents the grid of aliens.

- `group`: Phaser.Physics.Arcade.Group - A Phaser group to manage all alien sprites.
- `moveDirection`: number - The current horizontal direction of the group (1 for right, -1 for left).
- `moveSpeed`: number - The speed at which the group moves.
- `dropSpeed`: number - The vertical distance the group drops when hitting a screen edge.

# Quickstart: Testing Game Sound Effects

This guide outlines how to verify the newly added sound effects for firing, alien destruction, and player hits.

## Prerequisites

- Ensure the game development server is running. If not, navigate to the `invaders-game` directory and run `npm run dev`.
- Ensure the required sound files (`laser_shoot.wav`, `explosion.wav`, `player_hit.wav`) are placed in `invaders-game/public/assets/sounds/`.

## Testing Firing Sound Effect

1.  Open the game in a web browser (e.g., `http://localhost:5173/`).
2.  Start the game.
3.  Press the spacebar to fire a bullet.
4.  **Observe**: A distinct firing sound effect should play with each shot.

## Testing Alien Destruction Sound Effect

1.  Open the game in a web browser.
2.  Start the game.
3.  Fire at and destroy an alien.
4.  **Observe**: A distinct alien destruction sound effect should play when an alien is hit and destroyed.

## Testing Player Hit Sound Effect

1.  Open the game in a web browser.
2.  Start the game.
3.  Allow an alien bullet to hit your player ship.
4.  **Observe**: A distinct player hit sound effect should play when your ship is hit.

## Troubleshooting

- If sounds are not playing, ensure the sound files are correctly placed in `invaders-game/public/assets/sounds/` and that their filenames match those used in the code.
- Check the browser's developer console for any audio-related errors.

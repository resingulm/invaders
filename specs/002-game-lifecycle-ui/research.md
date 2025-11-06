# Research: Game Lifecycle UI

## Decision: Use Phaser Scenes

- **Decision**: We will use Phaser's scene management to implement the splash screen and the game-over screen.
- **Rationale**:
  - **Splash Screen**: A dedicated Phaser scene is the ideal way to manage the splash screen. It can handle its own assets, logic (the 5-second timer), and the transition to the main game scene.
  - **Game Over Screen**: A new scene for the game-over screen will encapsulate the display of the final score and the "Restart" and "Quit" buttons. This keeps the main `GameScene` clean and focused on gameplay.
- **Alternatives Considered**:
  - **DOM Elements**: We could use HTML/CSS to create the UI elements and overlay them on the game canvas. This is a valid approach, but using Phaser scenes keeps the entire experience within the Phaser framework, which is cleaner for this project.

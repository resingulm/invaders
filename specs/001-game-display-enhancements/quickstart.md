# Quickstart: Testing Game Display Enhancements

This guide outlines how to verify the full-screen splash screen, full-screen game display, and correct player ship positioning.

## Prerequisites

- Ensure the game development server is running. If not, navigate to the `invaders-game` directory and run `npm run dev`.

## Testing the Full-Screen Splash Screen

1.  Open the game in a web browser (e.g., `http://localhost:5173/`).
2.  **Observe**: The splash screen (`splash.png` with "INVADERS" text) should immediately appear and fill the entire browser window.
3.  **Verify**: The splash screen remains visible for approximately 5 seconds before transitioning to the main game.

## Testing the Full-Screen Game Display

1.  Once the main game scene is active, resize your browser window (make it larger and smaller).
2.  **Observe**: The game canvas should dynamically adjust its size to always fill the entire browser window, without any black bars or empty spaces.
3.  **Verify**: Game elements (aliens, player, score, lives) scale proportionally and remain visible and playable during resizing.

## Testing Player Ship Positioning

1.  When the main game scene is active, observe the player's spaceship.
2.  **Verify**: The player ship is consistently positioned at the bottom center of the game screen, regardless of browser window size.
3.  **Interact**: Move the player ship left and right to ensure its movement is constrained by the bottom edge of the screen and the side boundaries.

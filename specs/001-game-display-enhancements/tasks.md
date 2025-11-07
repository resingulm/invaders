# Tasks: Game Display Enhancements

**Input**: Design documents from `/specs/001-game-display-enhancements/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Foundational (Blocking Prerequisites)

**Purpose**: Ensure the game configuration supports full-screen scaling and responsiveness.

- [x] T001 Update `invaders-game/src/main.ts` to configure Phaser for full-screen scaling using `Phaser.Scale.FIT` and `Phaser.Scale.CENTER_BOTH`, and set initial dimensions to `window.innerWidth` and `window.innerHeight`.

---

## Phase 2: User Story 1 - Full-Screen Splash Screen with Title (Priority: P1) 🎯 MVP

**Goal**: A splash screen is displayed that fills the entire browser window, featuring a prominent "INVADERS" title.

**Independent Test**: The game loads, a full-screen splash image is visible with "INVADERS" text centered, and after a delay, the main game appears.

### Implementation for User Story 1

- [x] T002 [US1] Modify `invaders-game/src/scenes/SplashScreenScene.ts` to load `assets/splash.png`.
- [x] T003 [US1] Modify `invaders-game/src/scenes/SplashScreenScene.ts` to display `splash.png` scaled to fill the entire camera view.
- [x] T004 [US1] Modify `invaders-game/src/scenes/SplashScreenScene.ts` to add "INVADERS" text, centered on the screen, on top of the splash image.
- [x] T005 [US1] Modify `invaders-game/src/scenes/SplashScreenScene.ts` to implement a 5-second timer that transitions to the `GameScene`.

---

## Phase 3: User Story 2 - Full-Screen Game Display (Priority: P1)

**Goal**: The main game area dynamically adjusts to fill the entire browser window.

**Independent Test**: The game loads, and the game canvas fills the entire browser window, adapting to different screen sizes.

### Implementation for User Story 2

- [x] T006 [US2] Ensure `invaders-game/src/main.ts` is configured for responsive scaling (already covered in T001).
- [x] T007 [US2] Modify `invaders-game/src/scenes/GameScene.ts` to adjust UI elements (score, lives) to be positioned relative to the screen edges and scale appropriately.

---

## Phase 4: User Story 3 - Player Ship Positioned at Bottom (Priority: P1)

**Goal**: The player's spaceship is consistently positioned at the bottom edge of the game screen.

**Independent Test**: The game loads, and the player ship is visible at the bottom center of the game screen.

### Implementation for User Story 3

- [x] T008 [US3] Modify `invaders-game/src/scenes/GameScene.ts` to initialize the player ship at the bottom center of the screen, relative to the camera dimensions.
- [x] T009 [US3] Modify `invaders-game/src/scenes/GameScene.ts` to adjust the alien game over condition to be relative to the screen height.
- [x] T010 [US3] Modify `invaders-game/src/scenes/GameScene.ts` to adjust the initial alien creation position to be centered relative to the screen width.

---

## Dependencies & Execution Order

- **Phase 1 (Foundational)** must be completed before all other phases.
- **User Stories (Phases 2, 3, 4)** can be implemented sequentially or in parallel after Phase 1 is complete.
  - All User Stories are P1 and can be tackled in any order after foundational setup.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Foundational
2. Complete Phase 2: User Story 1
3. **STOP and VALIDATE**: The full-screen splash screen with title works.

### Incremental Delivery

1. Deliver the MVP (Phase 1 & 2).
2. Add Phase 3 to ensure the main game display is full-screen.
3. Add Phase 4 to ensure the player ship is correctly positioned at the bottom.

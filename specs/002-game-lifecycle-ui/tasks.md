# Tasks: Game Lifecycle UI

**Input**: Design documents from `/specs/002-game-lifecycle-ui/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Foundational (Blocking Prerequisites)

**Purpose**: Create the new scene files that will be used in this feature.

- [ ] T001 Create a new file for the splash screen scene at `invaders-game/src/scenes/SplashScreenScene.ts`.
- [ ] T002 Create a new file for the game over scene at `invaders-game/src/scenes/GameOverScene.ts`.

---

## Phase 2: User Story 1 - Splash Screen on Startup (Priority: P1) 🎯 MVP

**Goal**: A splash screen is displayed for 5 seconds before the game starts.

**Independent Test**: The game loads, a splash screen is visible for 5 seconds, and then the main game appears.

### Implementation for User Story 1

- [ ] T003 [US1] Implement the basic structure of the `SplashScreenScene` in `invaders-game/src/scenes/SplashScreenScene.ts`.
- [ ] T004 [US1] Add a text element to the `SplashScreenScene` to serve as a placeholder for a splash image in `invaders-game/src/scenes/SplashScreenScene.ts`.
- [ ] T005 [US1] Implement a 5-second timer in the `create` method of `SplashScreenScene` that transitions to the `GameScene` in `invaders-game/src/scenes/SplashScreenScene.ts`.
- [ ] T006 [US1] Update the main game configuration in `invaders-game/src/main.ts` to load and start the `SplashScreenScene` first.

---

## Phase 3: User Story 2 - Game Over Options (Priority: P1)

**Goal**: The player has clear options to restart or quit after the game ends.

**Independent Test**: The game over screen displays "Restart" and "Quit" buttons that function correctly.

### Implementation for User Story 2

- [ ] T007 [US2] Implement the basic structure of the `GameOverScene` in `invaders-game/src/scenes/GameOverScene.ts`.
- [ ] T008 [US2] Add "Restart" and "Quit" button text elements to the `GameOverScene` in `invaders-game/src/scenes/GameOverScene.ts`.
- [ ] T009 [US2] Implement the "Restart" button logic in `GameOverScene` to restart the `GameScene` in `invaders-game/src/scenes/GameOverScene.ts`.
- [ ] T010 [US2] Implement the "Quit" button logic in `GameOverScene` to close the browser window in `invaders-game/src/scenes/GameOverScene.ts`.
- [ ] T011 [US2] Modify the `gameOver` method in `invaders-game/src/scenes/GameScene.ts` to transition to the `GameOverScene` instead of displaying "Game Over" text.

---

## Dependencies & Execution Order

- **Phase 1 (Foundational)** must be completed before all other phases.
- **User Stories (Phases 2, 3)** can be implemented sequentially or in parallel after Phase 1 is complete.
  - **US1 (Phase 2)** is the highest priority.
  - **US2 (Phase 3)** depends on the game over logic in `GameScene`.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Foundational
2. Complete Phase 2: User Story 1
3. **STOP and VALIDATE**: The splash screen works.

### Incremental Delivery

1. Deliver the MVP (Phase 2).
2. Add Phase 3 to complete the game loop with restart/quit options.

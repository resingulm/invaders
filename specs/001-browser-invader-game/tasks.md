# Tasks: Classical Invader Game

**Input**: Design documents from `/specs/001-browser-invader-game/`
**Prerequisites**: plan.md, spec.md, data-model.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure using Vite and TypeScript.

- [x] T001 Create project directory `invaders-game` and navigate into it.
- [x] T002 Initialize a new Vite project with the `vanilla-ts` template in the current directory.
- [x] T003 Install project dependencies with `npm install`.
- [x] T004 Install Phaser with `npm install phaser`.
- [x] T005 Create `public/assets/` directory for game assets.
- [x] T006 Create `src/scenes/` directory for game scene files.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core game setup that MUST be complete before ANY user story can be implemented.

- [x] T007 Configure the main Phaser game instance in `src/main.ts`.
- [x] T008 Create the main `GameScene.ts` file in `src/scenes/` with `preload`, `create`, and `update` methods.
- [x] T009 Load a placeholder player ship and alien asset in the `preload` method of `src/scenes/GameScene.ts`.

---

## Phase 3: User Story 1 - Player Control & Shooting (Priority: P1) 🎯 MVP

**Goal**: The player can control a ship at the bottom of the screen and fire projectiles.

**Independent Test**: The game loads, a ship is visible, and it moves left/right with arrow keys and fires a projectile with the spacebar.

### Implementation for User Story 1

- [x] T010 [US1] Create the player's spaceship sprite in the `create` method of `src/scenes/GameScene.ts`.
- [x] T011 [US1] Implement keyboard input handling for left and right arrow keys in the `update` method of `src/scenes/GameScene.ts`.
- [x] T012 [US1] Implement player ship movement logic based on keyboard input in `src/scenes/GameScene.ts`.
- [x] T013 [US1] Implement projectile firing logic when the spacebar is pressed in `src/scenes/GameScene.ts`.
- [x] T014 [US1] Ensure only one player projectile can be on the screen at a time.

---

## Phase 4: User Story 2 - Alien Invasion (Priority: P2)

**Goal**: A grid of aliens appears and moves in a synchronized pattern.

**Independent Test**: A grid of aliens appears at the top, moves horizontally, and drops down when reaching the screen edge.

### Implementation for User Story 2

- [x] T015 [US2] Create a group for aliens in the `create` method of `src/scenes/GameScene.ts`.
- [x] T016 [US2] Populate the alien group with a grid of alien sprites in `src/scenes/GameScene.ts`.
- [x] T017 [US2] Implement the horizontal movement logic for the alien group in the `update` method of `src/scenes/GameScene.ts`.
- [x] T018 [US2] Implement the logic for the alien group to drop down and reverse direction when it reaches the edge of the screen in `src/scenes/GameScene.ts`.

---

## Phase 5: User Story 3 - Combat & Scoring (Priority: P3)

**Goal**: The player can destroy aliens by shooting them and earn points.

**Independent Test**: Firing a projectile that collides with an alien removes the alien and increases the player's score.

### Implementation for User Story 3

- [x] T019 [US3] Implement collision detection between player projectiles and the alien group in `src/scenes/GameScene.ts`.
- [x] T020 [US3] Handle the collision event to destroy both the alien and the projectile in `src/scenes/GameScene.ts`.
- [x] T021 [US3] Implement a score variable and display it on the screen in `src/scenes/GameScene.ts`.
- [x] T022 [US3] Increment the score when an alien is destroyed.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Add game-over conditions, player lives, and level progression.

- [x] T023 Implement the "game over" condition for when aliens reach the bottom of the screen.
- [x] T024 [P] Implement logic for aliens to periodically fire projectiles downwards.
- [x] T025 [P] Implement collision detection between alien projectiles and the player ship.
- [x] T026 Implement a "lives" system for the player, decrementing a life when hit.
- [x] T027 Implement a "game over" condition for when the player runs out of lives.
- [x] T028 Implement logic to start a new, faster wave of aliens when all aliens in the current wave are destroyed.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed before all other phases.
- **Phase 2 (Foundational)** must be completed before Phases 3, 4, and 5.
- **User Stories (Phases 3, 4, 5)** can be implemented sequentially.
  - **US1 (Phase 3)** is the highest priority.
  - **US2 (Phase 4)** depends on the game scene from Phase 2.
  - **US3 (Phase 5)** depends on US1 (projectiles) and US2 (aliens).
- **Phase 6 (Polish)** should be done after the core user stories are complete.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: The player can move and shoot. This is the core mechanic.

### Incremental Delivery

1. Deliver the MVP (Phase 3).
2. Add Phase 4 to introduce the alien threat.
3. Add Phase 5 to complete the core gameplay loop (shooting aliens).
4. Add Phase 6 to make it a complete game experience.

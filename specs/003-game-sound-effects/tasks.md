# Tasks: Game Sound Effects

**Input**: Design documents from `/specs/003-game-sound-effects/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup

**Purpose**: Prepare the project structure for sound assets.

- [x] T001 Create the directory `invaders-game/public/assets/sounds/`.
- [x] T002 **ACTION REQUIRED**: Place `laser_shoot.wav`, `explosion.wav`, and `player_hit.wav` (or your chosen open-source sound files) into `invaders-game/public/assets/sounds/`. Ensure licenses are respected. (Manual download required)

---

## Phase 2: User Story 1 - Firing Sound Effect (Priority: P1) 🎯 MVP

**Goal**: A distinct sound effect is played when the player fires a bullet.

**Independent Test**: The game loads, and when the player fires, a sound effect is heard.

### Implementation for User Story 1

- [x] T003 [US1] Modify `invaders-game/src/scenes/GameScene.ts` to preload the `laser_shoot.wav` sound asset.
- [x] T004 [US1] Modify `invaders-game/src/scenes/GameScene.ts` to play the `laser_shoot.wav` sound when the player fires a bullet.

---

## Phase 3: User Story 2 - Alien Destruction Sound Effect (Priority: P1)

**Goal**: A distinct sound effect is played when an alien is destroyed.

**Independent Test**: The game loads, and when an alien is destroyed by a player's bullet, a sound effect is heard.

### Implementation for User Story 2

- [x] T005 [US2] Modify `invaders-game/src/scenes/GameScene.ts` to preload the `explosion.wav` sound asset.
- [x] T006 [US2] Modify `invaders-game/src/scenes/GameScene.ts` to play the `explosion.wav` sound when an alien is destroyed.

---

## Phase 4: User Story 3 - Player Hit Sound Effect (Priority: P1)

**Goal**: A distinct sound effect is played when the player's ship is hit.

**Independent Test**: The game loads, and when the player's ship is hit by an alien bullet, a sound effect is heard.

### Implementation for User Story 3

- [x] T007 [US3] Modify `invaders-game/src/scenes/GameScene.ts` to preload the `player_hit.wav` sound asset.
- [x] T008 [US3] Modify `invaders-game/src/scenes/GameScene.ts` to play the `player_hit.wav` sound when the player's ship is hit.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed before all other phases.
- **User Stories (Phases 2, 3, 4)** can be implemented sequentially or in parallel after Phase 1 is complete.
  - All User Stories are P1 and can be tackled in any order after foundational setup.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: User Story 1
3. **STOP and VALIDATE**: The firing sound effect works.

### Incremental Delivery

1. Deliver the MVP (Phase 1 & 2).
2. Add Phase 3 to implement the alien destruction sound.
3. Add Phase 4 to implement the player hit sound.

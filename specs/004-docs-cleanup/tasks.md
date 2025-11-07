# Tasks: Documentation Cleanup

**Input**: Design documents from `/specs/004-docs-cleanup/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Consolidate Game README into Licenses (Priority: P1) 🎯 MVP

**Goal**: The content of `invaders-game/README.md` is moved to `invaders-game/public/assets/sounds/licenses.md`, and the old README is removed.

**Independent Test**: The `invaders-game/README.md` file no longer exists, and its content is appended to `invaders-game/public/assets/sounds/licenses.md`.

### Implementation for Phase 1

- [x] T001 Read the content of `invaders-game/README.md`.
- [x] T002 Append the content of `invaders-game/README.md` to `invaders-game/public/assets/sounds/licenses.md`.
- [x] T003 Delete the file `invaders-game/README.md`.

---

## Phase 2: Update Top-Level README (Priority: P1)

**Goal**: The top-level `readme.md` provides clear instructions on how to run the game and includes a link to the game.

**Independent Test**: The top-level `readme.md` contains instructions to run the game and a functional link to the game.

### Implementation for Phase 2

- [ ] T004 Read the content of the top-level `readme.md`.
- [x] T005 Update the top-level `readme.md` to include instructions on how to run the game (e.g., `cd invaders-game`, `npm install`, `npm run dev`).
- [x] T006 Update the top-level `readme.md` to include a link to the game (e.g., `http://localhost:5173/`).

---

## Dependencies & Execution Order

- **Phase 1 (Consolidate Game README into Licenses)** must be completed before Phase 2.

## Implementation Strategy

### MVP First (Phase 1 Only)

1. Complete Phase 1: Consolidate Game README into Licenses.
2. **STOP and VALIDATE**: The game README is moved and deleted correctly.

### Incremental Delivery

1. Deliver the MVP (Phase 1).
2. Add Phase 2 to update the top-level README.

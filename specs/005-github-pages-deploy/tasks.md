# Tasks: GitHub Pages Deployment

**Input**: Design documents from `/specs/005-github-pages-deploy/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup Deployment Environment (Priority: P1) 🎯 MVP

**Goal**: Prepare the `invaders-game` project for deployment to GitHub Pages.

**Independent Test**: The `gh-pages` package is installed, and `vite.config.ts` is configured for GitHub Pages deployment.

### Implementation for Phase 1

- [x] T001 Navigate to the `invaders-game` directory.
- [x] T002 Install the `gh-pages` npm package as a dev dependency in `invaders-game/package.json`.
- [x] T003 Modify `invaders-game/vite.config.ts` to set the `base` option to the GitHub repository name (e.g., `/<repository-name>/`).
- [x] T004 Add a `deploy` script to `invaders-game/package.json` that builds the project and then deploys it using `gh-pages`.

---

## Phase 2: Create GitHub Actions Workflow (Priority: P1)

**Goal**: Automate the deployment of the game to GitHub Pages using GitHub Actions.

**Independent Test**: A GitHub Actions workflow is created that successfully builds and deploys the game to GitHub Pages on pushes to the `main` branch.

### Implementation for Phase 2

- [x] T005 Create the directory `.github/workflows/`.
- [x] T006 Create a new GitHub Actions workflow file `.github/workflows/deploy.yml` with the following steps:
    1.  Checkout the repository.
    2.  Set up Node.js.
    3.  Install dependencies in `invaders-game/`.
    4.  Run the `npm run deploy` script from the `invaders-game/` directory.
    5.  Configure the workflow to run on pushes to the `main` branch.

---

## Dependencies & Execution Order

- **Phase 1 (Setup Deployment Environment)** must be completed before Phase 2.

## Implementation Strategy

### MVP First (Phase 1 Only)

1. Complete Phase 1: Setup Deployment Environment.
2. **STOP and VALIDATE**: The project is configured for deployment.

### Incremental Delivery

1. Deliver the MVP (Phase 1).
2. Add Phase 2 to create the GitHub Actions workflow.

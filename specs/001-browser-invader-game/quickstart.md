# Quickstart: Setting up the Invader Game Project

This guide provides the steps to set up the development environment for the game.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Steps

1. **Create the project directory**:

    ```bash
    mkdir invaders-game
    cd invaders-game
    ```

2. **Initialize a new Vite project**:

    ```bash
    npm create vite@latest . -- --template vanilla-ts
    ```

    *This command scaffolds a new project with a vanilla TypeScript template.*

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Install Phaser**:

    ```bash
    npm install phaser
    ```

5. **Run the development server**:

    ```bash
    npm run dev
    ```

    *The game will be available at `http://localhost:5173` (or the next available port).*

## Project Structure

```bash
invaders-game/
├─── public/
│    └─── assets/
│         ├─── player-ship.png
│         └─── alien.png
├─── src/
│    ├─── main.ts
│    └─── scenes/
│         └─── GameScene.ts
├─── index.html
├─── package.json
└─── tsconfig.json
```

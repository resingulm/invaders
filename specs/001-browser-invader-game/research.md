# Research: Technology Stack for Invader Game

## Decision: Phaser 3 with TypeScript and Vite

- **Decision**: We will use Phaser 3 as the game engine, TypeScript as the programming language, and Vite as the build tool.
- **Rationale**:
  - **Phaser 3**: As requested by the user, Phaser is a feature-rich and mature game engine perfect for 2D browser games. It has a large community and extensive documentation.
  - **TypeScript**: It provides static typing, which improves code quality, readability, and maintainability. Phaser 3 has excellent TypeScript support.
  - **Vite**: It offers a significantly faster development experience compared to older build tools like Webpack, with near-instant hot module replacement.
- **Alternatives Considered**:
  - **JavaScript**: While viable, TypeScript is preferred for the reasons mentioned above.
  - **Other game engines (e.g., PixiJS, Babylon.js)**: Phaser is more specialized for 2D games like this and provides a more comprehensive set of tools out of the box.

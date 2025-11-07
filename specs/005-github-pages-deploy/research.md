# Research: GitHub Pages Deployment

## Decision: Utilize `gh-pages` npm package and GitHub Actions

- **Decision**: The deployment to GitHub Pages will be automated using a GitHub Actions workflow that leverages the `gh-pages` npm package. Vite's `base` configuration will be adjusted to ensure correct asset loading.
- **Rationale**:
  - **`gh-pages`**: This package simplifies the process of deploying a `dist` directory to a `gh-pages` branch, which is the standard for GitHub Pages deployments.
  - **GitHub Actions**: Provides a robust and integrated CI/CD solution for automating the build and deployment process directly from the repository.
  - **Vite `base` configuration**: Essential for ensuring that all relative asset paths (images, sounds, CSS, JS) are correctly resolved when the application is hosted under a subpath (e.g., `https://<username>.github.io/<repository-name>/`).
- **Alternatives Considered**:
  - **Manual deployment**: Manually building and pushing to the `gh-pages` branch is error-prone and not scalable. Automated deployment is preferred.
  - **Other deployment tools/services**: While other static site hosting services exist, GitHub Pages is directly integrated with GitHub repositories and is free for open-source projects, making it the most suitable choice for this feature.

## Configuration Details

- **`package.json`**: A new script, `deploy`, will be added to build the project and then deploy it using `gh-pages`.
- **`vite.config.ts`**: The `base` option in Vite's configuration will be set to the repository name (e.g., `/<repository-name>/`) to ensure correct asset paths.
- **`.github/workflows/deploy.yml`**: A new workflow file will be created to:
    1. Checkout the repository.
    2. Set up Node.js.
    3. Install dependencies.
    4. Run the `npm run deploy` script.
    5. Configure the workflow to run on pushes to the `main` branch.

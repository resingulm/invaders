# Quickstart: Verifying GitHub Pages Deployment

This guide outlines how to verify the successful deployment of the Invaders game to GitHub Pages.

## Prerequisites

- The GitHub Actions workflow for deployment must have completed successfully.
- You need to know your GitHub username and the repository name (e.g., `invaders`).

## Verification Steps

1. **Access the Deployed Game:**
    - Open your web browser and navigate to the GitHub Pages URL for your repository. This typically follows the format: `https://<your-github-username>.github.io/<repository-name>/` (e.g., `https://gregor.github.io/invaders/`).
    - **Observe**: The game's splash screen should load, followed by the game itself.
    - **Verify**: The game is fully playable, and all visual and audio assets load correctly.

2. **Check GitHub Repository Settings:**
    - Go to your GitHub repository on the web.
    - Navigate to **Settings** > **Pages**.
    - **Verify**: GitHub Pages should be configured to deploy from the `gh-pages` branch.
    - **Verify**: The deployment status should indicate a successful build and deployment.

## Troubleshooting

- If the game does not load or assets are missing, check the browser's developer console for errors (e.g., 404 errors for assets).
- Review the GitHub Actions workflow logs for any failures during the build or deployment process.
- Ensure the `base` path in `vite.config.ts` is correctly set to your repository name (e.g., `/<repository-name>/`).

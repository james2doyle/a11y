# a11y

> A site for checking if color combinations pass AA or AAA

Open the project on [GitHub Pages](https://james2doyle.github.io/a11y).

## Getting Started

Run the following commands:

Install dependencies once:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build a production bundle (generated in the `docs` folder):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Configuration

- **Base Path**: The project is configured to use `/a11y/` as the base path for production builds. This is set in `vite.config.js` and is automatically applied when `NODE_ENV=production`.
- **Output Directory**: The production build outputs to the `docs` folder, which is suitable for GitHub Pages deployment.

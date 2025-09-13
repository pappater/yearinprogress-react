# Year In Progress

A simple React app that visually displays the progress of the current year as a percentage. Built with [Create React App](https://github.com/facebook/create-react-app) and [Ant Design](https://ant.design/).

---

## Features
- Shows a live progress bar of the year
- Mobile-friendly UI detection
- Uses Ant Design for progress visualization
- Custom icon/logo

---

## Getting Started

### Prerequisites
- Node.js (>=10)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Available Scripts

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner in interactive watch mode.
- `npm run build` — Builds the app for production to the `build` folder.
- `npm run eject` — **Note: this is a one-way operation. Once you eject, you can’t go back!**

---

## Project Structure

```
public/        # Static files and index.html
src/           # React source code
  App.js       # Main app logic
  App.css      # Styles
  icon.png     # Custom logo
build/         # Production build output
```

## Dependencies
- React
- Ant Design
- @testing-library/react, jest-dom, user-event

---

## License
MIT

---

## Author
- [@randomriffs](https://github.com/randomriffs)
- Twitter: [@yearinprogress](http://twitter.com/yearinprogress)

---

## Deployment to GitHub Pages

This project is automatically deployed to GitHub Pages on every push to `master` using GitHub Actions.

**Live site:** https://pappater.github.io/yearinprogress-react

Deployment is now triggered on every push to the `main` branch using GitHub Actions.

To deploy manually:
1. Ensure the `homepage` field in `package.json` is set to your GitHub Pages URL.
2. Run:
   ```bash
   npm run build
   ```
3. Push to `main` and GitHub Actions will deploy the latest build to GitHub Pages.

For more details, see `.github/workflows/deploy.yml`.

## Manual Deployment with npm

You can deploy the app to GitHub Pages using:

```bash
npm run build
npm run deploy
```

This will publish the contents of the `build` folder to the `gh-pages` branch of your repository.
